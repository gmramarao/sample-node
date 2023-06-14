const updateEmploye = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            const data = req.body;
            delete data.email;
            db.employees.update({ empId: data.empId }, { $set: { ...data } }, { upsert: true }, (err, doc) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`Employe data updated successfully`);
                }
            })
        } catch (err) {
            reject(err);
        }
    })
}

const getEmploye = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            db.employees.find({}, (err, doc) => {
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
module.exports = { updateEmploye, getEmploye };