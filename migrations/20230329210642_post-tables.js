/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('post').del();
    await knex('post').insert([
        {
            id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
            user_name: 'Manhattan',
            user_icon: '',
            author: '',
            itinerary_count: 3,
            followers: '20k',


            address: '503 Broadway',
            city: 'New York',
            country: 'USA',
            contact_name: 'Parmin Aujla',
            contact_position: 'Warehouse Manager',
            contact_phone: '+1 (646) 123-1234',
            contact_email: 'paujla@instock.com',
        },

    ]);
};
