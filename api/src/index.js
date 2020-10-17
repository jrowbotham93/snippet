import models, {
  sequelize
} from './models';
import routes from './routes';
import schema from './schemas/index';
import resolvers from './resolvers/index';

import express from 'express';
import {
  ApolloServer
} from 'apollo-server-express';

import cors from 'cors';


const app = express();
const PORT = 8080;


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
  context: {
    models,
    me: models.User.findByLogin('jrowbotham93'),
  },
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/snippets', routes.snippet);

const eraseDatabaseOnSync = true;

sequelize.sync({
  force: eraseDatabaseOnSync
}).then(async () => {
  seedDatabase();
  app.listen(PORT, () => {
    console.log(`Apollo Express Server running at: http://localhost:${PORT}/`);
  });
});

const seedDatabase = async () => {
  await models.User.create({
      username: 'jrowbotham93',
      email: 'james.rowbotham2Gamil.com',
      password: 'password',
      snippets: [{
        text: `const findTheHighestNumber = (array) => { const sortedArray = array.sort((itemA, itemB) => itemA - itemB ) return sortedArray[sortedArray.length-1] } `,
        type: `code`,
      }, ],
    }, {
      include: [models.Snippet],
    }

  );

  await models.User.create({
      username: 'gijsLebesque03',
      email: 'gijs-lebesque2Gamil.com',
      password: 'password',
      snippets: [{
        text: `const findTheHighestNumber = (array) => { const sortedArray = array.sort((itemA, itemB) => itemA - itemB ) return sortedArray[sortedArray.length-1] } `,
        type: `code`,
      }, ],
    }, {
      include: [models.Snippet],
    }

  );
};
