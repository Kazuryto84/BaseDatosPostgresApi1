const {getUserDb} = require("../controllers/UserController")

// --> query user/?name=
const getUserHandler = async (req, res) => {
 const { name } = req.query;
 try {
    if(name) {
        const response = await getUserDb(name);
        return res.status(200).json(response);
      }
      const response = await getUserDb();
      res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error: error.message});
 }
  
};

const getUserIdHandler = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(`Usuario con Id:${id}`);
    
};    

module.exports = {
    getUserHandler,
    getUserIdHandler,
}