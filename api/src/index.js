// Module imports
import {
  sequelize
} from './models';
import routes from './routes';

// Express App Setup
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  req.context = {
    models: sequelize.models,
    me: sequelize.models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/snippets', routes.snippet);

sequelize.sync().then(async () => {
  seedDatabase()
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });
});


const seedDatabase = async () => {
  console.log(sequelize.models)
  await sequelize.models.user.create({
    username: 'jrowbotham93',
    email: '1234',
    password: 'password',

    snippets: [{
      text: `const findTheHighestNumber = (array) => { const sortedArray = array.sort((itemA, itemB) => itemA - itemB ) return sortedArray[sortedArray.length-1] } `,
      type: `code`,
    }, ],
  }, {
    include: [sequelize.models.snippet],
  }, );
}
