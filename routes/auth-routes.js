let Auth = require("../util/API");

module.exports = function (app) {



    app.post("/api/add_user", async (req, res) => {
        let user_details = req.body;

        let exists = await Auth.userExists(user_details.email);

        if (!exists) {

            let user = await Auth.addUser(user_details.name, user_details.email, user_details.phone_number, user_details.password);

            if (user === false) {
                return await res.json(false);
            }

            return await res.json(user);

        } else {
            return await res.json(false);
        }
    });

    app.post("/api/get_friends", async (req, res) => {
        let user = req.body;



    });

};