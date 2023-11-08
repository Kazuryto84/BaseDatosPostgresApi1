const { Op } = require("sequelize");
const { User, Post } = require("../db");
const axios = require("axios");

const createUserDb = async (name, email, phone) => {
   const newUser = await User.create({name, email, phone});
   return newUser;
};

/*
const getUserDb = async () => {
    const allUsersDB = await User.findAll();
    return allUsersDB;
};

*/
const deleteUserDb = async (id) => {
    await User.destroy({ where: { id } });
  };

  const getUserDb = async () => {
    const allUsersDB = await User.findAll({
      include: {
        model: Post,
        attributes: ["title", "body"],
      },
    });
    return allUsersDB;
  };

const getUserApi = async () => {
    const peticion = (await axios("https://jsonplaceholder.typicode.com/users")).data;
    const apiInfoMap = peticion.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
        }
    })
    return apiInfoMap;
};

const getAllUsers = async (name) => {
    const userDB = await getUserDb()
    const userApi = await getUserApi()
    const allUsers = [...userDB,...userApi] //todos los Usuarios
    if(name){
        let filterUsers = allUsers.filter((user) => 
          user.name.toLowerCase().includes(name.toLowerCase())
        );
    if(filterUsers.length){
        return filterUsers
    }
    } else {
        return allUsers;
    }
};

const getUserById = async (id) => {
    if (isNaN(id)){
        const user = await User.findByPk(id);
        return user;
    }
    const user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
    return user;
};

/* busqueda por coincidencia
const getUserDb = async (name) => {
    if(name){
        const userByName = await User.findAll({
            limit: 3,
            where:{
                name: { [Op.like]: "%" + name + "%"},
            },
        });
    return userByName;
    }
    const allUsers = await User.findAll();
    return allUsers;
};
*/

/*por orden
const getUserDb = async () => {
        const userByName = await User.findAll({
            order: [["name", "ASC"]]
        });
    return userByName;
    };
*/    


module.exports = {
    createUserDb,
    getUserById,
    getAllUsers,
    deleteUserDb
};