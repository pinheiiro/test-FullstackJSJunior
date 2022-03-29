const Joi = require("joi");

const schema = Joi.object({
	email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "br"] } }).lowercase().required(),
	senha: Joi.string().max(30).min(8).required()
});

module.exports = schema;