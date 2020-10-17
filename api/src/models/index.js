import Sequelize from 'sequelize';
import keys from '../../keys';


const sequelize = new Sequelize(
  keys.database || 'postgres',
  keys.username || 'postgres',
  keys.password || '', {
    host: keys.host || 'localhost',
    port: keys.port || 5432,
    dialect: keys.dialect,
  }
);

const models = {
  User: sequelize.import('./user'),
  Snippet: sequelize.import('./snippet'),
};

models.User.associate = models => {
  models.User.hasMany(models.Snippet, {
    onDelete: 'CASCADE',

  });
};
models.Snippet.associate = models => {
  models.Snippet.belongsTo(models.User, {});
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export {
  sequelize
};

export default models;
