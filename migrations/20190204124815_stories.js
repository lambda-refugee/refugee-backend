
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stories', tbl => {
        tbl.increments();
  
        tbl
          .string('title', 128)
          .notNullable()
        tbl
          .text('text')
          .notNullable();
        tbl
        .boolean('approved')
        tbl
        .string('country')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('stories')
};
