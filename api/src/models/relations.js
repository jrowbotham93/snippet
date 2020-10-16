function applyExtraSetup(sequelize) {
  const {
    user,
    snippet
  } = sequelize.models;

  user.hasMany(snippet);
  snippet.belongsTo(user);
}
export default applyExtraSetup;
