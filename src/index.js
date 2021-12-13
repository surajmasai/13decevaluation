const express = require("express");

const { register, login } = require("./controllers/users.controller");
const movieController = require("./controllers/movies.controller");

const theatersController = require("./controllers/theatres.controller");

const screenController = require("./controllers/screen.controller");

const showController = require("./controllers/show.controller");

const seatsController = require("./controllers/seats.controller");

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/movies", movieController);

app.use("/theatres", theatersController)

app.use("/screen", screenController);

app.use("/show", showController);

app.use("/seats", seatsController)



module.exports = app;