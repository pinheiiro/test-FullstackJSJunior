const schema = require("../config/joi");

async function checkCreate(req, res, next) {

	const data = req.body;

	if(!data.email) {
		res.status(400).json({error: "it is mandatory to send an email in the request"});
	}
    
	if(!data.senha) {
		res.status(400).json({error: "it is mandatory to send a senha in the request"});
	}

	const { email, senha } = data;

	try {
		await schema.validateAsync({email, senha});
		next();
	} catch(err) {
		res.status(401).json({error: err.details[0].message});
	}

}

module.exports = checkCreate;