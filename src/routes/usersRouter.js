const { Router } = require("express");
const {getUserHandler, getUserIdHandler, deleteUserHandler, } = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/users", getUserHandler);

//----------------> params
usersRouter.get("/users/:id", getUserIdHandler);

usersRouter.delete("/:id", deleteUserHandler);

module.exports = usersRouter;