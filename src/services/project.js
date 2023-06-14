const ObjectId = require('mongojs').ObjectId;
const updateProject = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            const data = req.body;
            delete data.email;
            db.project.update({ projectName: data.projectName }, { $set: { ...data } }, { upsert: true }, (err, doc) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`Project data updated successfully`);
                }
            })
        } catch (err) {
            reject(err);
        }
    })
}

const getProject = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            var pipeline = [
                {
                    $lookup: {
                        let: { clientObjId: { "$toObjectId": "$clientId" } },
                        from: "client",
                        pipeline: [
                            { $match: { $expr: { $eq: ["$_id", "$$clientObjId"] } } }
                        ],
                        as: "client"
                    },

                }
            ];
            if (req.query.clientId) {
                pipeline = [
                    ...pipeline,
                    { "$match": { "client._id": new ObjectId(req.query.clientId) } }
                ]
            }
            db.project.aggregate(pipeline, (err, doc) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        } catch (err) {
            reject(err);
        }
    })
}
module.exports = { updateProject, getProject };