// Module imports
import models from './models';
import routes from './routes';

// Express App Setup
import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  }
  next();
});
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/snippets', routes.snippet);



app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
