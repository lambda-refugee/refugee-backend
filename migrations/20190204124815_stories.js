
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stories', tbl => {
        tbl.increments();
  
        tbl
          .string('title', 128)
          .notNullable()
          .unique();
        tbl
          .text('text')
          .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('stories')
};
