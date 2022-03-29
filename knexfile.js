// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();

module.exports = {
  client: "pg",
	version: "8.7",
	connection: {
		host: "localhost",
		port: 5432,
		user: process.env.PG_USER,
		password: process.env.PG_PASSWORD,
		database: process.env.PG_DB,
	},
	migrations: {
		directory: `${__dirname}/src/database/migrations`,
		tableName: "migrations",
	}
};
