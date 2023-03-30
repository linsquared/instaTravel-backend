exports.up = function (knex) {
    return knex.schema.createTable('day', (table) => {
        table.uuid('itinerary_id');
        table.string('user_name').notNullable();
        table.string('city');
        table.string('day').notNullable();
        table.string('activity_id').notNullable();
        table.string('activity_id');
        table.string('activity_id');
        table.string('activity_id');
        table.string('activity_id');
        table.string('activity_id');
        table.string('activity_id');
        table.string('activity_id');
        table.string('activity_id');
        table.string('activity_id');
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('day');
};


