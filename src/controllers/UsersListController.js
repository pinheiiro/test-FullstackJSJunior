const knex = require("../config/database");

class UsersList {
	async handle(req, res) {
		try {
			const users = await knex("users").select(["id", "email"]);
			res.status(200).json(users);
		} catch (err) {
			res.status(401).json({ err });
		}
	}
}

module.exports = UsersList;