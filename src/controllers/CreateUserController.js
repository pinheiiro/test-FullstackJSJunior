const knex = require("../config/database");
const bcrypt = require("bcryptjs");

class CreateUser {
	async handle(req, res) {
		const { email, senha } = req.body;
		const salt = await bcrypt.genSalt(10);
		const senhaCrypto = await bcrypt.hash(senha, salt);
		try {
			await knex("users").insert({ email: email, senha: senhaCrypto });
			const user = await knex("users").select(["id", "email"]).where({ email: email });
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json({ err });
		}
	}
}

module.exports = CreateUser;