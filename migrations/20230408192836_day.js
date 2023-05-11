exports.up = function (knex) {
    return knex.schema.createTable('day', (table) => {
        table.string('day_id').notNullable();
        table.string('itinerary_id').notNullable();
        table.string('day').notNullable();
        table.string('activity_id').notNullable();
        table.primary(['day_id', 'activity_id']); // create a composite primary key
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('days');
};
