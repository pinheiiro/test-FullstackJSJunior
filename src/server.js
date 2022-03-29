const express = require("express");
require("dotenv").config();
const router = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.listen(process.env.PORT || 3333, () => {
	console.log("Server is runnning !");
});