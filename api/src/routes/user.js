import {
  Router
} from 'express';

const router = Router()

router.get("/users", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get("/users/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

router.post("/users", (req, res) => {
  return res.send("Received a POST HTTP method");
});

router.put("/users/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;
