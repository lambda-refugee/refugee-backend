
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'minion', password: '123456'},
        {username: 'minion2', password:'123456'}
      ]);
    });
};
