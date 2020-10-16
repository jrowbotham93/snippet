import {
  Router
} from 'express';

const router = Router()

router.get('/', async (req, res) => {
  const snippets = await req.context.models.snippet.findAll();
  return res.send(snippets);
});

router.get('/:snippetId', async (req, res) => {
  const snippet = await req.context.models.snippet.findByPk(
    req.params.snippetId,
  );
  return res.send(snippet);
});

router.post('/', async (req, res) => {
  const message = await req.context.models.snippet.create({
    text: req.body.text,
    userId: req.context.me.id,
  });

  return res.send(snippet);
});

router.delete('/:snippetId', async (req, res) => {
  const result = await req.context.models.snippet.destroy({
    where: {
      id: req.params.snippetIs
    },
  });

  return res.send(true);
});
export default router;
