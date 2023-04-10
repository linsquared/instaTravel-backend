exports.up = function (knex) {
    return knex.schema.createTable('itinerary', (table) => {
        table.string('itinerary_id').primary().notNullable();
        table.string('user_id')
            .notNullable()
            .references('users.user_id')
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string('user_name').notNullable();
        table.string('user_icon').notNullable();
        table.string('city').notNullable();
        table.string('budget').notNullable();
        table.integer('views').defaultTo(0);
        table.integer('likes').defaultTo(0);
        table.integer('ratings').defaultTo(0);
        table.integer('duration').notNullable();
        table.string('city_img').defaultTo('');
        table.string('trip_title').notNullable();
        table.string('date').notNullable();
        table.text('description').notNullable();
        table.timestamps(true, true);
    });
};


exports.down = function (knex) {
    return knex.schema.dropTable('itinerary');
};

