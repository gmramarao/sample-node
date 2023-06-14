"use strict";
const {genHash} = require('../hooks/genHash');
const {tokenCreation} = require('../hooks/authentication');
const login = (req, db)=>{
    return new Promise((resolve, reject)=>{
        try {
            const { email, password } = req.body;
            db.users.findOne({email : email}, async(err, doc)=>{
                if(err){
                    reject(err);
                } else {
                    if(doc){
                        const hash = await genHash(doc.salt, password);
                        if(doc.password === hash){
                            const token = tokenCreation(doc);
                            resolve(token);
                        } else {
                            reject(`Invalid Password`);
                        }
                    } else {
                        reject(` Email not existed`);
                    }
                }
            })
        } catch (err){
            reject(err);
        }
        
    })
}

module.exports = login;