/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('user_name').notNullable();
    table.string('user_icon').notNullable();
    table.string('author').notNullable();
    table.integer('itinerary_count').notNullable();
    table.string('followers').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('warehouses');
};
