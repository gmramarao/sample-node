const updateUserInfo = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            const data = req.body;
            db.users.findOne({ email: req.body.email }, (err1, doc1) => {
                if (err1) {
                    reject(err1);
                } else {
                    if (doc1) {
                        data.userId = doc1._id;
                        delete data.email;
                        db.userInfo.update({ userId: doc1._id }, { $set: { ...data } }, { upsert: true }, (err2, doc2) => {
                            if (err2) {
                                reject(err2);
                            } else {
                                resolve(`User info updated successfully`);
                            }
                        })
                    } else {
                        reject(`Invalid user`);
                    }
                }
            })
        } catch (err) {
            reject(err);
        }
    })
}

const getUserInfo = (req, db) => {
    return new Promise((resolve, reject) => {
        try {
            db.userInfo.aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "userId",
                        foreignField: "_id",
                        as: "users"
                    }
                },
                {
                    $match: {
                        "users.email": req.query.email
                    }
                },
                {
                    $project: {
                        users: 0
                    }
                }
            ], (err, doc) => {
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
module.exports = { updateUserInfo, getUserInfo };