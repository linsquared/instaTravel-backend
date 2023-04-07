exports.up = function (knex) {
    return knex.schema.createTable('itinerary', (table) => {
        table.string('itinerary_id').primary().notNullable();
        table.string('user_id')
            .notNullable()
            .references('users.user_id')
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string('city').notNullable();
        table.string('budget').notNullable();
        table.integer('views');
        table.integer('likes');
        table.integer('ratings');
        table.integer('duration').notNullable();
        table.string('city_img');
        table.string('trip_title').notNullable();
        table.string('date').notNullable();
        table.text('description').notNullable();
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('itinerary');
};

