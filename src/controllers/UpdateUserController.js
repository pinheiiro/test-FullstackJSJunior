const knex = require("../config/database");
const bcrypt = require("bcryptjs");

class UpdateUser {
	async handle(req, res) {
		const { user_id } = req.params;
		const { email, senha } = req.body;
		const salt = await bcrypt.genSalt(10);
		const senhaCrypto = await bcrypt.hash(senha, salt);
		try {
			await knex("users").where({ id: user_id }).update({ email: email, senha: senhaCrypto });
			const data = await knex("users").select(["id", "email"]).where({ id: user_id });
			res.status(200).json(data);
		} catch (err) {
			res.status(500).json({ err });
		}
	}
}

module.exports = UpdateUser;