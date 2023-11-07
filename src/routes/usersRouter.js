const { Router } = require("express");
const {getUserHandler, getUserIdHandler } = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/users", getUserHandler);

//----------------> params
usersRouter.get("/users/:id", getUserIdHandler);

module.exports = usersRouter;