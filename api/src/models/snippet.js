const snippet = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('snippet', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });

  snippet.associate = models => {
    snippet.belongsTo(models.User);
  };

  return Snippet;
};

export default snippet;
