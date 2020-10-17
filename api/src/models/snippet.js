const snippet = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('snippet', {
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

  return Snippet
};

export default snippet
