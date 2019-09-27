let Auth = require("../util/API");

module.exports = function (app) {



    app.post("/api/add_user", async (req, res) => {
        let user_details = req.body;

        let exists = await Auth.userExists(user_details.email);

        if (!exists) {

            let user = await Auth.addUser(user_details.name, user_details.email, user_details.phone_number, user_details.password);

            if (user === false) {
                await res.json(false);
            }

            await res.json(true);

        } else {
            return res.json(false);
        }
    });

    app.post("/api/user_exists", async (req, res) => {
        let details = req.body;

        let email = details.email;
        let exists = await Auth.userExists(email);

        return res.json(exists);

    });

    app.post("/api/login", async (req, res) => {
        let details = req.body;

        let email = details.email;
        let password = details.password;

        if (email && password) {

            let check = await Auth.checkEmailAndPassword(email, password);

            if (check === true) {

                return res.json({ correct: true });

            } else {
                return res.json({ correct: false });
            }

        } else {
            return res.json(false);
        }

    });

    app.post("/api/get_friends", async (req, res) => {
        let details = req.body;

        let friends = await Auth.getFriends(details.email, details.password);

        return res.json(friends);

    });

};