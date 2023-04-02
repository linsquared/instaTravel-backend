exports.up = function (knex) {
    return knex.schema.createTable('itinerary', (table) => {
        table.uuid('itinerary_id').primary().notNullable();;
        table.uuid('user_id')
            .references('users.user_id')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
            .notNullable();
        table.string('city').notNullable();
        table.string('budget').notNullable();
        table.integer('likes');
        table.integer('views');
        table.integer('ratings');
        table.integer('duration').notNullable();
        table.string('city_img').notNullable();
        table.string('trip_title').notNullable();
        table.string('date').notNullable();
        table.text('description').notNullable();
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('itinerary');
};

