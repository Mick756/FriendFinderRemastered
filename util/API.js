const mongoose = require('mongoose');
const SimpleCrypto = require("simple-crypto-js").default;
const mongo = require('./mongo');

const Schema = mongoose.Schema;
const PORT = 27017;

const _secretKey = SimpleCrypto.generateRandom(256);
const simpleCrypto = new SimpleCrypto(_secretKey);

module.exports =  {

    async addUser(name, email, phone_number, password) {

            const new_user = new mongo.User({
                name: name,
                email: email,
                phone_number: phone_number,
                password: mongo.encrypt(password)
            });

            return await mongo.save(new_user);
    },

    async deleteUser(email) {

        return await mongo.User.find({
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

};