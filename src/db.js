const { Sequelize } = require('sequelize');
require("dotenv").config();

const UserModel = require("./models/User");
const PostModel = require("./models/Post");

const {DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);


UserModel(sequelize);
PostModel(sequelize);

const {User, Post} = sequelize.models

//un usuario tiene varios posts
User.hasMany(Post)

//un post va a pertenecer a un usuario
Post.belongsTo(User)

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};