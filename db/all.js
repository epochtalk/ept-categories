var dbc = require('epochtalk-core-pg')({ conString: process.env.DATABASE_URL });
var db = dbc.db;
var helper = dbc.helper;

module.exports = function() {
  var q = 'SELECT id, name, view_order, viewable_by, imported_at from categories';
  return db.sqlQuery(q)
  .then(helper.slugify);
};
