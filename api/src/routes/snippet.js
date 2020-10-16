import {
  Router
} from 'express';

import {
  v4 as uuidv4
} from 'uuid';

const router = Router()

router.get("/snippets", (req, res) => {
  return res.send(Object.values(req.context.models.snippets));
});

router.get("/snippets/:snippetId", (req, res) => {
  return res.send(req.context.models.snippets[req.params.snippetId]);
});

router.post("/snippets", (req, res) => {
  const id = uuidv4();
  const snippet = {
    id,
    snippet: req.body.text,
    userId: req.context.me.id
  };
  req.context.models.snippets[id] = snippet;
  return res.send(snippet);
});

router.put("/snippets/:snippetId", (req, res) => {
  const {
    [req.params.snippetId]: snippet, ...updatedSnippets
  } = snippets;
  snippet.snippet = req.body.text;
  updatedSnippets.push(snippet);

  req.context.models.snippets = updatedSnippets;
  return res.send(snippet);
});

router.delete("/snippets/:snippetId", (req, res) => {
  const {
    [req.params.snippetId]: snippet, ...otherSnippets
  } = req.context.models.snippets;
  req.context.models.snippets = otherSnippets;
  return res.send(snippet);
});
export default router;
