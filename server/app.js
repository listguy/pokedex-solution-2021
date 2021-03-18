const epxress = require("express");
const cors = require("cors");
const api = require("./routes");
const app = epxress();

app.use(cors());
app.use(epxress.json());

app.use("/api", api);

module.exports = app;
