const knex = require("../config/database");

async function checkUser(req, res, next) {
    const { user_id } = req.params;
    const user = await knex("users").select(["id", "email"]).where({ id: user_id });
	if(!user[0]) {
		res.status(401).json({error: "User not found"});
	} else {
        next();
    }
}

module.exports = checkUser;