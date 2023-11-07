const { User } = require("../db");

const createUserDb = async (name, email, phone) => {
   const newUser = await User.create({name, email, phone});
   return newUser;
};

const getUserDb = async (name) => {
    if(name){
        const userByName = await User.findOne({where:{name}})
    return userByName
    }
    const allUsers = await User.findAll();
    return allUsers;
};

module.exports = {
    createUserDb,
    getUserDb,
};