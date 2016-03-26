module.exports = {
  method: 'GET',
  path: '/api/categories',
  config: {
    auth: { strategy: 'jwt' },
    plugins: { acls: 'categories.all' }
  },
  handler: function(request, reply) {
    var promise = request.db.categories.all();
    return reply(promise);
  }
};
