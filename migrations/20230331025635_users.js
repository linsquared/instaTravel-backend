exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.uuid('user_id').primary();
        table.string('user_name').notNullable();
        table.string('user_icon').notNullable();
        table.string('author').notNullable();
        table.integer('itinerary_count');
        table.string('followers');
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('users');
};


