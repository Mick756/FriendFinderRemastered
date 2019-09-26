const mongoose = require('mongoose');
const SimpleCrypto = require("simple-crypto-js").default;
const mongo = require('./mongo');

const Schema = mongoose.Schema;
const PORT = 27017;

const simpleCrypto = new SimpleCrypto("651e04175c0bdc7f365c9be0b1ab2400671a4a9696ce9d8f9059930894737377");


function encrypt(plain)  {
    return simpleCrypto.encrypt(plain);
}

function decrypt(encrypted) {
    return simpleCrypto.decrypt(encrypted);
}

async function userExists(email) {

    return await mongo.User.findOne({email: email})
        .then(user => {
            if (user.email) {
                return true;
            } else {
                return false;
            }
        }).catch(err => {
            return false;
        });
}

module.exports =  {

    userExists: async (email) => await userExists(email),

    login: async (email, password) => {

        let exists = await userExists(email);

        if (exists) {
            console.log("lol1");
            return await mongo.User.findOne({email: email})
                .then(user => {
                    let decrypt_password = decrypt(user.password);
                    console.log(password, decrypt_password);
                    if (password === decrypt_password) {
                        return true;
                    }
                    return false;
                }).catch(err => {
                console.log(err);
            });
        } else {
            return false;
        }

    },


    async addUser(name, email, phone_number, password) {

        let exists = await userExists(email);

        if (!exists) {

            const new_user = new mongo.User({
                name: name,
                email: email,
                phone_number: phone_number,
                password: encrypt(password)
            });

            return await mongo.save(new_user);
        } else {
            return false;
        }
    },

    async deleteUser(email) {

        await mongo.User.findOne({
            email: email,

        }, (err, results) => {

            if (!err) {
                results.forEach(result => {
                    result.remove();
                });
                console.log("Deleted.");
            }
        })
    }

};