const knex = require("../config/database");

class DeleteUsers {
	async handle(req, res) {
		try {
			await knex("users").delete();
			res.end();
		} catch (err) {
			res.status(500).json({ err });
		}
	}
}

module.exports = DeleteUsers;