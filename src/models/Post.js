const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Post", {
        id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        },
        title: {
            type: DataTypes.STRING,
            aloowNull:  false,
        },
        body: {
            type: DataTypes.STRING,
            aloowNull:  false,
       },
    },  
    {freezeTableName: true, timestamps: false}
  );
};