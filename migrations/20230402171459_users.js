exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.uuid('user_id').primary().notNullable();
        table.string('user_name').notNullable();
        table.string('user_icon');
        table.string('author').notNullable();
        table.integer('itinerary_count');
        table.string('followers');
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('users');
};


