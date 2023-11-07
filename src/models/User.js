const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("User", {
        id : {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        },
        name: {
        type: DataTypes.STRING,
        allownule: false,
        validate: {
        len: {
        args: [5,10],
        msg: "El nombre debe contener entre 5 y 10 caracteres",
         },
       },
     },
        email: {
        type: DataTypes.STRING,
        allownule: false,
        unique: true,
        validate: {
        isEmail: {
        msg: "Debe ser un emial valido"
          }  
        }
     },
        phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
     },
    }, 
    {freezeTableName: true, timestamps: false}
   );
};