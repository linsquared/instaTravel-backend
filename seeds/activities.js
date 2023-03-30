exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activites').del();
  await knex('activites').insert([
    {
      user_id: '9318657024',
      user_name: 'RoamingRaven',
      user_icon: 'http://localhost:8080/images/avery.jpg',
      author: 'Avery Matthews',
      itinerary_count: 3,
      followers: '20k',

    },


  ]);
};