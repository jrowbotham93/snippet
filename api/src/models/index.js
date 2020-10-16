import Sequelize from 'sequelize';
import User from './user';
import Snippet from './snippet';
import keys from '../../keys';

const sequelize = new Sequelize(keys.database || 'postgres', keys.username || 'postgres', keys.password || "", {
  host: keys.host || 'localhost',
  port: keys.port || 5432,
  dialect: keys.dialect,
});

const models = {
  User,
  Snippet,
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export {
  sequelize
};
export default models;

let users = {
  1: {
    id: '1',
    username: 'James Rowbotham',
  },
  2: {
    id: '2',
    username: 'Gijs Lebesque',
  },
};

let snippets = {
  1: {
    id: '1',
    snippet: `const findTheHighestNumber = (array) => { const sortedArray = array.sort((itemA, itemB) => itemA - itemB ) return sortedArray[sortedArray.length-1] } `,
    userId: '1',
  },
  2: {
    id: '2',
    snippet: 'const findTheHighestNumber = (array) => { const sortedArray = array.sort((itemA, itemB) => itemA - itemB ) return sortedArray[sortedArray.length-1] } ',
    userId: '2',
  },
};
