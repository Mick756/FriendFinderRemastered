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

async function checkEmailAndPassword(email, password)  {

    let exists = await userExists(email);

    if (exists) {

        return await mongo.User.findOne({email: email})
            .then(user => {

                let decrypt_password = decrypt(user.password);

                if (password === decrypt_password) {

                    return true;
                }

                return false;
            }).catch(err => {});
    } else {
        return false;
    }
}

async function findUser(email)  {

    let exists = await userExists(email);

    if (exists) {

        return await mongo.User.findOne({email: email})
            .then(user => {



            }).catch(err => {});
    } else {
        return false;
    }
}

module.exports =  {

    userExists: async (email) => await userExists(email),

    checkEmailAndPassword: async (email, password) => await checkEmailAndPassword(email, password),

    findUser: async (email) => await findUser(email),


    addUser: async (name, email, phone_number, password) => {

        let exists = await userExists(email);

        if (!exists) {

            const new_user = new mongo.User({
                name: name,
                email: email,
                phone_number: phone_number,
                password: encrypt(password),
                friends: []
            });

            return await mongo.save(new_user);
        } else {
            return false;
        }
    },

    deleteUser: async (email) => {

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
    },

    getFriends: async (email, password) => {

        let check = await checkEmailAndPassword(email, password);

        if (check) {

            // search emails in user friends array and send back array of user objects with only name.

        } else {
            return [];
        }

    }

};