const { Router } = require("express");
const { postUserHandler, getPostHandler, createPostHandler} = require("../handlers/postHandlers");

const postRouter = Router();

postRouter.post("/posts", postUserHandler)

postRouter.get("/posts", getPostHandler).post("/", createPostHandler);

module.exports = postRouter;