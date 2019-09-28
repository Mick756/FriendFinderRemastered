const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PORT = 27017;

async function connect() {
// Connect to MongoDB
    if (process.env.MONGODB_URI) {

        await mongoose.connect(process.env.MONGODB_URI).then(() => {

        }).catch((error) => {

        });
    } else {

        await mongoose.connect('mongodb://localhost:27017/friend_finder', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log("Connected to the local MongoDB on port " + PORT + ". mongodb://localhost:27017/friend_finder");
        }).catch((error) => {
            console.log("Failed to connect to the local MongoDB on port " + PORT + ". mongodb://localhost:27017/friend_finder");
        });
    }
}


const UserSchema = new Schema({
    name: String,
    email: String,
    phone_number: String,
    password: String,
    friends: Array,
    friend_requests: Array,
    taken_survey: Boolean,
    survey: Array
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User: User,
    save: async (user) => {
        await user.save((err, user) => {
            return user;
        });
    },
    connect: async () => await connect(),
};