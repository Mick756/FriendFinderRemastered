let Auth = require("../util/API");

module.exports = function (app) {

    app.get("/api/get_survey/:email", async (req, res) => {
        let email = req.params.email;

        let exists = await Auth.userExists(email);

        if (exists) {

            let user = await Auth.findUser(email);

            if (user !== false) {

                return user.survey;

            } else {
                await res.json(false)
            }

        } else {
            await res.json(false);
        }

    });

    app.get("/api/user_exists/:email", async (req, res) => {
        let email = req.params.email;

        let exists = await Auth.userExists(email);

        return res.json(exists);

    });

    app.post("/api/add_user", async (req, res) => {
        let user_details = req.body;

        let exists = await Auth.userExists(user_details.email);

        if (!exists) {

            let added = await Auth.addUser(user_details.name, user_details.email, user_details.phone_number, user_details.password);

            if (added === false) {
                await res.json(false);
            }

            await res.json(true);

        } else {
            await res.json(false);
        }

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