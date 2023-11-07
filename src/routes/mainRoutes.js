const { Router } = require("express");
const postRouter = require("./postRouter");
const usersRouter = require("./usersRouter");
const mainRouter = Router();

mainRouter.use("/", usersRouter);
mainRouter.use("/", postRouter);



module.exports = mainRouter;