const {createUserDb} = require("../controllers/UserController")
const { getPosts, createPostDB } = require("../controllers/PostController")

const postUserHandler = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const response = await createUserDb(name, email, phone);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   
}

const getPostHandler = async (req, res) => {
    try {
      const response = await getPosts();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const createPostHandler = async (req, res) => {
    const { title, body, userId } = req.body;
    try {
      const response = await createPostDB(title, body, userId);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {postUserHandler, getPostHandler, createPostHandler };
