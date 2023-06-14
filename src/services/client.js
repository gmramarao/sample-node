const updateClient = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            const data = req.body;
            delete data.email;
            db.client.update({ clientName: data.clientName }, { $set: { ...data } }, { upsert: true }, (err, doc) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`Client data updated successfully`);
                }
            })
        } catch (err) {
            reject(err);
        }
    })
}

const getClient = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            db.client.find({}, (err, doc) => {
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
module.exports = { updateClient, getClient };