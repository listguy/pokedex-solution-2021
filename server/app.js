const epxress = require("express");
const api = require("./routes");
const app = epxress();

app.use(epxress.json());

app.use("/api", api);

module.exports = app;
