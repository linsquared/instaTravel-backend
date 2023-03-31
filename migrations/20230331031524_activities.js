exports.up = function (knex) {
    return knex.schema.createTable('activities', (table) => {
        table.uuid('activity_id').primary();
        table.string('activity_name').notNullable();
        table.string('activity_type').notNullable();
        table.string('cost');
        table.text('activity_description').notNullable();
        table.string('activity_image')
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('activities');
};

