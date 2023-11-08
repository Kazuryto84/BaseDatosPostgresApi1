const { Post } = require("../db");

const getPosts = async () => {
  const posts = await Post.findAll();
  if (posts.length) {
    return posts;
  }
  throw new Error("No se encontraron los posts solicitados");
};

const createPostDB = async (title, body, userId) => {
  const post = await Post.create({ body, title });
  await post.setUser(userId);
  return post;
};

module.exports = { getPosts, createPostDB };
