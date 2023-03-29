/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            id: '9318657024',
            user_name: 'RoamingRaven',
            user_icon: '',
            author: 'Avery Matthews',
            itinerary_count: 3,
            followers: '20k',

        },

        {
            id: '6815302947',
            user_name: 'WanderingWave',
            user_icon: '',
            author: 'Maya Rivera',
            itinerary_count: 5,
            followers: '964',

        },

        {
            id: '4976132085',
            user_name: 'GlobeTrotterGuy',
            user_icon: '',
            author: 'Luke Harrison',
            itinerary_count: 7,
            followers: '10k',

        },

        {
            id: '8204639571',
            user_name: 'JetSetJenny',
            user_icon: '',
            author: 'Jennifer Lee',
            itinerary_count: 3,
            followers: '15',

        },

        {
            id: '3152908764',
            user_name: 'NomadNate',
            user_icon: '',
            author: 'Nathan Chen',
            itinerary_count: 6,
            followers: '1568',

        },

        {
            id: '7639841250',
            user_name: 'AdventurousAnna',
            user_icon: '',
            author: 'Anna Nguyen',
            itinerary_count: 5,
            followers: '100k',

        },

        {
            id: '1582973460',
            user_name: 'ZonningoutZ',
            user_icon: '',
            author: 'Zesty Zhao',
            itinerary_count: 1,
            followers: '3',

        },

        {
            id: '9025687431',
            user_name: 'AdventurousAmy',
            user_icon: '',
            author: 'Amy Armance',
            itinerary_count: 10,
            followers: '200k',

        },

        {
            id: '6078925341',
            user_name: 'BrazilianLocalJa',
            user_icon: '',
            author: 'Jess A',
            itinerary_count: 8,
            followers: '156k',

        },

        {
            id: '4819062379',
            user_name: 'AlexaA',
            user_icon: '',
            author: 'Alexa Armstrong',
            itinerary_count: 3,
            followers: '20k',

        },

        {
            id: '2950384167',
            user_name: 'TumblingTom',
            user_icon: '',
            author: 'Tommy Tom',
            itinerary_count: 2,
            followers: '46',

        },

    ]);
};
