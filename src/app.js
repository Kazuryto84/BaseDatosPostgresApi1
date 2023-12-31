const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

//para ver nuestras peticiones por consola
app.use(morgan("dev"));

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.use(express.json());

app.use(mainRoutes);


module.exports = app;