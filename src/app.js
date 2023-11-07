const express = require("express");
const morgan = require("morgan");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

//para ver nuestras peticiones por consola
app.use(morgan("dev"));

app.use(express.json());

app.use(mainRoutes);


module.exports = app;