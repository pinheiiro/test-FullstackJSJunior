const knex = require("../config/database");

class UserList {
	async handle(req, res) {
		const { user_id } = req.params;
		try {
			const user = await knex("users").select(["id", "email"]).where({ id: user_id });
			res.status(200).json(user);
		} catch (err) {
			res.status(401).json({ err });
		}
	}
}

module.exports = UserList;