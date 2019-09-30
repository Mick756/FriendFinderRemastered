const mongoose = require('mongoose');
const SimpleCrypto = require("simple-crypto-js").default;
const mongo = require('./mongo');

const Schema = mongoose.Schema;
const PORT = 27017;

const simpleCrypto = new SimpleCrypto(SimpleCrypto.generateRandom(256));


function encrypt(plain)  {
    return simpleCrypto.encrypt(plain);
}

function decrypt(encrypted) {
    return simpleCrypto.decrypt(encrypted);
}

async function userExists(email) {

    return await mongo.User.findOne({email: email})

        .then(user => {

            return (!!user.email);

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

                return (password === decrypt_password);


            }).catch(err => {
                return false;
            });

    } else {
        return false;
    }
}

async function findUser(email)  {

    let exists = await userExists(email);

    if (exists) {

        return await mongo.User.findOne({email: email})
            .then(user => {

                return user;

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
                friends: [],
                friend_requests: [],
                taken_survey: false
            });

            await mongo.save(new_user);

            return true;
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
            }
        })
    },

    getFriends: async (email, password) => {

        let check = await checkEmailAndPassword(email, password);

        if (check) {

            let user = await findUser(email);
            let friends = [];

            for (const friend_email of user.friends) {
                  let friend = await findUser(friend_email);
                  friends.push(friend);
            }

            return friends;

        } else {
            return [];
        }

    },

    addSurvey: async (email, survey) => {

        let exists = await userExists(email);

        if (exists) {

            await mongo.User.updateOne(
                {email: email},
                {
                    $set: {
                            survey: survey,
                            taken_survey: true
                        }
                });

            return true;

        } else {
            return false;
        }

    }

};