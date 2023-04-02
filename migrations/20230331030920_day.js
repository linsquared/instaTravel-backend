exports.up = function (knex) {
    return knex.schema.createTable('day', (table) => {
        table.uuid('itinerary_id')
            .referencces('itinerary.itinerary.id')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
            .notNullable();
        table.uuid('day_id').primary().notNullable();
        table.string('day').notNullable();
        table.string('activity_id1');
        table.string('activity_id2');
        table.string('activity_id3');
        table.string('activity_id4');
        table.string('activity_id5');
        table.string('activity_id6');
        table.string('activity_id7');
        table.string('activity_id8');
        table.string('activity_id9');
        table.string('activity_id10');
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('day');
};


