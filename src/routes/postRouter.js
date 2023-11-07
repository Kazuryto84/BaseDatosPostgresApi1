const { Router } = require("express");
const { postUserHandler, getPostHandler} = require("../handlers/postHandlers");

const postRouter = Router();

postRouter.post("/posts", postUserHandler)

postRouter.get("/posts", getPostHandler)

module.exports = postRouter;