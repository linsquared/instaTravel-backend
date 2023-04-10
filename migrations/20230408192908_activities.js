exports.up = function (knex) {
    return knex.schema.createTable('activities', (table) => {
        table.string('activity_id').primary();
        table.string('activity_name').notNullable();
        table.string('activity_type').notNullable();
        table.string('cost').defaultTo('');
        table.text('activity_description').notNullable();
        table.string('activity_image').defaultTo('');
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('activities');
};


