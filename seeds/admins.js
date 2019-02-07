const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'minion', password: bcrypt.hashSync('123456')},
        {username: 'minion2', password:'123456'}
      ]);
    });
};
