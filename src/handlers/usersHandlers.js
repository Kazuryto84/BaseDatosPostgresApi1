const {getAllUsers, getUserById, deleteUserDb } = require("../controllers/UserController")

// --> query user/?name=
const getUserHandler = async (req, res) => {
 const { name } = req.query;
 try {
    if(name) {
        const response = await getAllUsers(name);
        return res.status(200).json(response);
      }
      const response = await getAllUsers();
      res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error: error.message});
 }
  
};

const getUserIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getUserById(id);
        return res.status(200).send(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    };    

const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUserDb(id);
        res.status(200).send("Usuario eliminado");
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };

module.exports = {
    getUserHandler,
    getUserIdHandler,
    deleteUserHandler
}