const mongoose = require('mongoose');

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost:27017');
}


const User = {name: String, email: String, phone_number: String, password: String};
const UserModel = mongoose.model('User', User);

module.exports =  {

    addUser(name, email, phone_number, password) {

        const user = new UserModel({name: name, email: email, phone_number: phone_number, password: password});

        user.save().then(() => {
            console.log("Saved");
        });



    }

};