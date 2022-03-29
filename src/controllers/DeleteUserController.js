const knex = require("../config/database");

class DeleteUser {
	async handle(req, res) {
		const { user_id } = req.params;
		try {
			await knex("users").where({ id: user_id }).delete();
			res.status(200).end();
		} catch (err) {
			res.status(500).json({ err });
		}
	}
}

module.exports = DeleteUser;