exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.string('user_id').primary().notNullable();
        table.string('user_name').notNullable();
        table.string('user_icon').defaultTo('');
        table.string('author').notNullable();
        table.integer('itinerary_count').defaultTo(0);
        table.string('followers').defaultTo(0);
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('users');
};


