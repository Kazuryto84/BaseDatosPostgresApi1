const {createUserDb} = require("../controllers/UserController")

const postUserHandler = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const response = await createUserDb(name, email, phone);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   
}

const getPostHandler = (req, res) => {
    res.status(200).send("Se recibieron los datos melos");
}

module.exports = {postUserHandler, getPostHandler}
