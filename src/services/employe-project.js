const sendMail = require("../hooks/email");
const ObjectId = require('mongojs').ObjectId;
const updateEmployeProject = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            const data = req.body;
            delete data.email;
            db.employe_project.update({ empId: data.empId }, { $set: { ...data } }, { upsert: true }, async (err, doc) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        var employe_project_res = await getEmlopyProjectDetails(db, data.empId);
                        let emailData = {
                            to: employe_project_res[0].employees.orgEmail,
                            from: 'rgaddam@evoketechnologies.com', // Use the email address or domain you verified above
                            subject: `Welcome to ${employe_project_res[0].project.projectName} project`,
                            html: `<strong>Below are the project Details: 
                                        <div>
                                            Client: ${employe_project_res[0].client.clientName}
                                        </div>
                                        <div>
                                            Project: ${employe_project_res[0].project.projectName}
                                        </div>
                                        
                                    </strong>`
                        }
                        console.log(emailData);

                        sendMail(emailData);
                        resolve(`Employe Project data updated successfully`);
                    } catch(err){
                        reject(err);
                    }
                    
                }
            })
        } catch (err) {
            reject(err);
        }
    })
}

const getEmployeProject = async(req, db) => {
    return new Promise(async(resolve, reject) => {
        try {
            var empRes = await getEmlopyProjectDetails(db);
            resolve(empRes);
        } catch (err) {
            reject(err);
        }
    })
}

const getEmlopyProjectDetails = (db, empId='') => {
    return new Promise((resole, reject)=>{
        var pipeline = [
            {
                $lookup: {
                    from: "employees",
                    let: { empObjId: { $toObjectId: "$empId" } },
                    pipeline: [
                        { $match: { $expr: { $eq: ["$_id", "$$empObjId"] } } }
                    ],
                    as: "employees"
                }
            },
            {
                $unwind: "$employees"
            },
            {
                $lookup: {
                    from: "project",
                    let: { projectObjId: { $toObjectId: "$projectId" } },
                    pipeline: [
                        { $match: { $expr: { $eq: ["$_id", "$$projectObjId"] } } }
                    ],
                    as: "project"
                }
            },
            {
                $unwind: "$project"
            },
            {
                $lookup: {
                    from: "client",
                    let: { clientObjId: { $toObjectId: "$project.clientId" } },
                    pipeline: [
                        { $match: { $expr: { $eq: ["$_id", "$$clientObjId"] } } }
                    ],
                    as: "client"
                }
            },
            {
                $unwind: "$client"
            },
        ];
        if (empId) {
            pipeline = [
                ...pipeline,
                { "$match": { "employees._id": new ObjectId(empId) } }
            ]
        }
        db.employe_project.aggregate(pipeline, (err, doc) => {
            if (err) {
                reject(err);
            } else {
                resole(doc);
            }
        });
    })
    
}
module.exports = { updateEmployeProject, getEmployeProject };