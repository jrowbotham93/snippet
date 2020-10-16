import Sequelize from 'sequelize';
import keys from '../../keys';
import applyExtraSetup from './relations';

const sequelize = new Sequelize(
  keys.database || 'postgres',
  keys.username || 'postgres',
  keys.password || '', {
    host: keys.host || 'localhost',
    port: keys.port || 5432,
    dialect: keys.dialect,
  }
);

const modelDefiners = [require('./user'), require('./snippet')];
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

// const models = {
//   User: sequelize.import('./user'),
//   Message: sequelize.import('./snippet'),
// };

// Object.keys(models).forEach((key) => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

export {
  sequelize
};
// export default models;
