const {
  DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('snippet', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    text: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
};
