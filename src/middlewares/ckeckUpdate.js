async function checkUpdate(req, res, next) {

	const data = req.body;

	if(!data.email || !data.senha) {
		res.status(400).json({error: "it is mandatory to send an email and senha in the request"});
	} else {
		next();
	}

}

module.exports = checkUpdate;