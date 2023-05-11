exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      user_id: '9318657024',
      user_name: 'RoamingRaven',
      user_icon: 'http://localhost:8080/images/users/avery.jpg',
      author: 'Avery Matthews',
      itinerary_count: 3,
      followers: '20k',
      password: 'Password.123',
      email: 'averyM@hotmail.com'

    },
    {
      user_id: '6815302947',
      user_name: 'WanderingWave',
      user_icon: 'http://localhost:8080/images/users/maya.jpg',
      author: 'Maya Rivera',
      itinerary_count: 5,
      followers: '964',
      password: 'Password.123',
      email: 'mayarivera@example.com'
    },

    {
      user_id: '4976132085',
      user_name: 'GlobeTrotterGuy',
      user_icon: 'http://localhost:8080/images/users/Luke.jpg',
      author: 'Luke Harrison',
      itinerary_count: 7,
      followers: '10k',
      password: 'Password.123',
      email: 'lukeharrison@example.com'
    },

    {
      user_id: '8204639571',
      user_name: 'JetSetJenny',
      user_icon: 'http://localhost:8080/images/users/Jennifer.jpg',
      author: 'Jennifer Lee',
      itinerary_count: 3,
      followers: '15',
      password: 'Password.123',
      email: 'jenniferlee@example.com'
    },

    {
      user_id: '3152908764',
      user_name: 'NomadNate',
      user_icon: 'http://localhost:8080/images/users/Nathan.jpg',
      author: 'Nathan Chen',
      itinerary_count: 6,
      followers: '1568',
      password: 'Password.123',
      email: 'nathanchen@example.com'
    },

    {
      user_id: '7639841250',
      user_name: 'AdventurousAnna',
      user_icon: 'http://localhost:8080/images/users/anna.jpg',
      author: 'Anna Nguyen',
      itinerary_count: 5,
      followers: '100k',
      password: 'Password.123',
      email: 'annanguyen@example.com'
    },

    {
      user_id: '1582973460',
      user_name: 'ZonningoutZ',
      user_icon: 'http://localhost:8080/images/users/zesty.png',
      author: 'Zesty Zhao',
      itinerary_count: 1,
      followers: '3',
      password: 'Password.123',
      email: 'zesty.zhao@example.com',
    },

    {
      user_id: '9025687431',
      user_name: 'DaringAmy',
      user_icon: 'http://localhost:8080/images/users/amy.png',
      author: 'Amy Armance',
      itinerary_count: 10,
      followers: '200k',
      password: 'Password.123',
      email: 'amyarmance@example.com',
    },

    {
      user_id: '6078925341',
      user_name: 'BrazilianLocalJa',
      user_icon: 'http://localhost:8080/images/users/jess.png',
      author: 'Jess A',
      itinerary_count: 8,
      followers: '156k',
      password: 'Password.123',
      email: 'jessica.a@example.com'
    },

    {
      user_id: '4819062379',
      user_name: 'AlexaA',
      user_icon: 'http://localhost:8080/images/users/alexa.png',
      author: 'Alexa Casa',
      itinerary_count: 3,
      followers: '20k',
      password: 'Password.123',
      email: 'alexacasa@example.com'
    },

    {
      user_id: '2950384167',
      user_name: 'TumblingTom',
      user_icon: 'http://localhost:8080/images/users/tommy.jpg',
      author: 'Tommy Tom',
      itinerary_count: 2,
      followers: '46',
      password: 'Password.123',
      email: 'DoubleTom@example.com'
    },

    {
      user_id: '630163fc-69c5-4745-ab50-e65fba71ea22',
      user_name: 'lintravels',
      user_icon: 'http://localhost:8080/images/users/sushi.jpg',
      author: 'Lin squared',
      itinerary_count: 1,
      followers: '17',
      password: '$2a$10$RguaZV89lHWXNUNHi3jiuOhnu8Ug5dhpn1XnCHx6SzI8KxXeo3MGG',
      email: 'abc@yahoo.com'

    }

  ]);
};
