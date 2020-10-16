import {
  Router
} from 'express';
import {
  sequelize
} from '../models';

const router = Router()

router.get('/', async (req, res) => {
  const users = await sequelize.models.user.findAll();
  console.log("hello <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ")
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await sequelize.models.user.findByPk(
    req.params.userId,
  );
  return res.send(user);
});

export default router;
