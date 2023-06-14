const bcrypt = require("bcrypt");
const {genSalt, genHash} = require('../hooks/genHash');
const signup = (req, db)=>{
    return new Promise((resolve, reject)=>{
        try {
            const {email, password} = req.body;
            if(email && password){
                db.users.find({email: email}, async(err, doc)=>{
                    if(err){
                        reject(err);
                    } else {
                        if(doc.length){
                            reject(`Email already existed`);
                        } else {
                            try {
                                const salt = await genSalt();
                                const hash = await genHash(salt, password);
                                let insertData = {
                                    email: email,
                                    password: hash,
                                    salt: salt,
                                    createdAt: new Date(),
                                    updatedAt: new Date()
                                }
                                db.users.insertOne(insertData, (err, doc)=>{
                                    if(err){
                                        reject(err);
                                    } else {
                                        resolve(doc);
                                    }
                                })
                            } catch(err){
                                reject(err);
                            }
                            
                        }
                    }
                })
            } else {
                reject(`email and password required`);
            }
        } catch(err){
            reject(err);
        }
        
    })
}

module.exports = signup;