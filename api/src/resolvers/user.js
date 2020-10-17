export default {
  Query: {
    me: async (parent, args, {
      me
    }, {
      models
    }) => {
      return await models.User.findByPk(me.id);
    },
    user: async (parent, {
      id
    }, {
      models
    }) => {
      return await models.User.findByPk(id);
    },
    users: async (parent, args, {
      models
    }) => {
      return await models.User.findAll();
    },
  },

  User: {
    snippets: async (user, args, {
      models
    }) => {
      return await models.Snippet.findAll({
        where: {
          userId: user.id
        }
      })
    },
  },
};
