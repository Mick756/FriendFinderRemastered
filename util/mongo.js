const mongoose = require('mongoose');

const SimpleCrypto = require("simple-crypto-js").default;

const _secretKey = SimpleCrypto.generateRandom(256);
const simpleCrypto = new SimpleCrypto(_secretKey);

const Schema = mongoose.Schema;
const PORT = 27017;

function connect() {
// Connect to MongoDB
    if (process.env.MONGODB_URI) {

        mongoose.connect(process.env.MONGODB_URI).then(() => {

        }).catch((error) => {

        });
    } else {

        mongoose.connect('mongodb://localhost:27017/friend_finder', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log("Connected to the local MongoDB on port " + PORT);
        }).catch((error) => {
            console.log("Failed to connect to the local MongoDB on port " + PORT);
        });
    }
}


const UserSchema = new Schema({
    name: String,
    email: String,
    phone_number: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User: User,
    encrypt: (plain) => {
        return simpleCrypto.encrypt(plain);
    },
    decrypt: (encrypted) => {
        return simpleCrypto.decrypt(encrypted);
    },
    save: (user) => {
        user.save((err, user) => {
            console.log("Saved: " + user.name);
        });
    },
    connect: () => connect(),
};