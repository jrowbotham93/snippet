export default {
  Query: {
    snippets: async (parent, args, {
      models
    }) => {
      return await models.Snippet.findAll();
    },
    snippet: async (parent, {
      id
    }, {
      models
    }) => {
      return await models.Snippet.findByPk(id);
    },
  },

  Mutation: {
    createSnippet: async (parent, {
      text,
      type
    }, {
      me,
      models
    }) => {
      return await models.Snippet.create({
        text,
        type,
        userId: me.id,
      });
    },

    deleteSnippet: async (parent, {
      id
    }, {
      models
    }) => {
      return await models.Snippet.destroy({
        where: {
          id
        }
      })

    }
  },

  Snippet: {
    user: async (snippet, args, {
      models
    }) => {
      return await models.User.findByPk(snippet.userId)
    },
  }
}
