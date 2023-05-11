exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('day').del();
  await knex('day').insert([

    {
      day_id: 'E1Y5X3B2K7',
      itinerary_id: '4829650317',
      day: '1',
      activity_id: 'tok-7586942163',
    },
    {
      day_id: 'E1Y5X3B2K7',
      itinerary_id: '4829650317',
      day: '1',
      activity_id: 'tok-5392816598',
    },
    {
      day_id: 'E1Y5X3B2K7',
      itinerary_id: '4829650317',
      day: '1',
      activity_id: 'tok-4632785402',
    },
    {
      day_id: 'E1Y5X3B2K7',
      itinerary_id: '4829650317',
      day: '1',
      activity_id: 'tok-6843205792',
    },
    {
      day_id: 'E1Y5X3B2K7',
      itinerary_id: '4829650317',
      day: '1',
      activity_id: 'tok-8765432123546'
    },

    {
      day_id: 'W9D0A1Z3C2',
      itinerary_id: '4829650317',
      day: '2',
      activity_id: 'tok-7865432345654',
    },
    {
      day_id: 'W9D0A1Z3C2',
      itinerary_id: '4829650317',
      day: '2',
      activity_id: 'tok-8356123456765',
    },
    {
      day_id: 'W9D0A1Z3C2',
      itinerary_id: '4829650317',
      day: '2',
      activity_id: 'tok-7896542345789',
    },
    {
      day_id: 'W9D0A1Z3C2',
      itinerary_id: '4829650317',
      day: '2',
      activity_id: 'tok-6734982356123',
    },
    {
      day_id: 'W9D0A1Z3C2',
      itinerary_id: '4829650317',
      day: '2',
      activity_id: 'tok-4534676534756',
    },
    {
      day_id: 'S4F6G8J7H9',
      itinerary_id: '4829650317',
      day: '3',
      activity_id: 'tok-2874562345678',
    },
    {
      day_id: 'S4F6G8J7H9',
      itinerary_id: '4829650317',
      day: '3',
      activity_id: 'tok-9864352347554',
    },
    {
      day_id: 'S4F6G8J7H9',
      itinerary_id: '4829650317',
      day: '3',
      activity_id: 'tok-8347521946325',
    },
    {
      day_id: 'S4F6G8J7H9',
      itinerary_id: '4829650317',
      day: '3',
      activity_id: 'tok-7534215678132',
    },
    {
      day_id: 'S4F6G8J7H9',
      itinerary_id: '4829650317',
      day: '3',
      activity_id: 'tok-9018742306842',
    },
    {
      day_id: 'L2N8M1K0T3',
      itinerary_id: '4829650317',
      day: '4',
      activity_id: 'tok-3749281682903',
    },
    {
      day_id: 'L2N8M1K0T3',
      itinerary_id: '4829650317',
      day: '4',
      activity_id: 'tok-5638921729014',
    },
    {
      day_id: 'L2N8M1K0T3',
      itinerary_id: '4829650317',
      day: '4',
      activity_id: 'tok-4563218739461',
    },
    {
      day_id: 'L2N8M1K0T3',
      itinerary_id: '4829650317',
      day: '4',
      activity_id: 'tok-8736459087632',
    },
    {
      day_id: 'L2N8M1K0T3',
      itinerary_id: '4829650317',
      day: '4',
      activity_id: 'tok-9128340683610',
    },
    {
      day_id: 'R6S1B4Z8Y0',
      itinerary_id: '4829650317',
      day: '5',
      activity_id: 'tok-3572860532205',
    },
    {
      day_id: 'R6S1B4Z8Y0',
      itinerary_id: '4829650317',
      day: '5',
      activity_id: 'tok-4795638921100',
    },
    {
      day_id: 'R6S1B4Z8Y0',
      itinerary_id: '4829650317',
      day: '5',
      activity_id: 'tok-2390687208349',
    },

    {
      day_id: 'P3F7D9N0H2',
      itinerary_id: '1208376945',
      day: '1',
      activity_id: 'tok-3782469075413',
    },
    {
      day_id: 'P3F7D9N0H2',
      itinerary_id: '1208376945',
      day: '1',
      activity_id: 'tok-2389746398756',
    },
    {
      day_id: 'P3F7D9N0H2',
      itinerary_id: '1208376945',
      day: '1',
      activity_id: 'tok-2390687208349',
    },
    {
      day_id: 'P3F7D9N0H2',
      itinerary_id: '1208376945',
      day: '1',
      activity_id: 'tok-4795638921100',
    },
    {
      day_id: 'P3F7D9N0H2',
      itinerary_id: '1208376945',
      day: '1',
      activity_id: 'tok-3572860532205',
    },
    {
      day_id: 'U9T4X2J7G1',
      itinerary_id: '1208376945',
      day: '2',
      activity_id: 'tok-9128340683610',
    },
    {
      day_id: 'U9T4X2J7G1',
      itinerary_id: '1208376945',
      day: '2',
      activity_id: 'tok-8736459087632',
    },
    {
      day_id: 'U9T4X2J7G1',
      itinerary_id: '1208376945',
      day: '2',
      activity_id: 'tok-4563218739461',
    },
    {
      day_id: 'U9T4X2J7G1',
      itinerary_id: '1208376945',
      day: '2',
      activity_id: 'tok-5638921729014',
    },
    {
      day_id: 'U9T4X2J7G1',
      itinerary_id: '1208376945',
      day: '2',
      activity_id: 'tok-3749281682903',
    },
    {
      day_id: 'V2W6Y3A1B0',
      itinerary_id: '1208376945',
      day: '3',
      activity_id: 'tok-9018742306842',
    },
    {
      day_id: 'V2W6Y3A1B0',
      itinerary_id: '1208376945',
      day: '3',
      activity_id: 'tok-7534215678132',
    },
    {
      day_id: 'V2W6Y3A1B0',
      itinerary_id: '1208376945',
      day: '3',
      activity_id: 'tok-8347521946325',
    },
    {
      day_id: 'V2W6Y3A1B0',
      itinerary_id: '1208376945',
      day: '3',
      activity_id: 'tok-9864352347554',
    },
    {
      day_id: 'V2W6Y3A1B0',
      itinerary_id: '1208376945',
      day: '3',
      activity_id: 'tok-2874562345678',
    },

    {
      day_id: 'K7R8L3T6N1',
      itinerary_id: '6093842157',
      day: '1',
      activity_id: 'tok-7586942163241'
    },
    {
      day_id: 'K7R8L3T6N1',
      itinerary_id: '6093842157',
      day: '1',
      activity_id: 'tok-7586942163240'
    },
    {
      day_id: 'K7R8L3T6N1',
      itinerary_id: '6093842157',
      day: '1',
      activity_id: 'tok-7586942163239'
    },
    {
      day_id: 'K7R8L3T6N1',
      itinerary_id: '6093842157',
      day: '1',
      activity_id: 'tok-7586942163238'
    },

    {
      day_id: 'M4S9G1H0C2',
      itinerary_id: '6093842157',
      day: '2',
      activity_id: 'tok-7586942163236',
    },

    {
      day_id: 'M4S9G1H0C2',
      itinerary_id: '6093842157',
      day: '2',
      activity_id: 'tok-7586942163235',

    },
    {
      day_id: 'M4S9G1H0C2',
      itinerary_id: '6093842157',
      day: '2',
      activity_id: 'tok-7586942163237',
    },
    {
      day_id: 'N2T4K0Z1D8',
      itinerary_id: '6093842157',
      day: '3',
      activity_id: 'tok-9847230918745"',
    },
    {
      day_id: 'N2T4K0Z1D8',
      itinerary_id: '6093842157',
      day: '3',
      activity_id: 'tok-1987263045832',
    },
    {
      day_id: 'N2T4K0Z1D8',
      itinerary_id: '6093842157',
      day: '3',
      activity_id: 'tok-5749305849201',
    },
    {
      day_id: 'N2T4K0Z1D8',
      itinerary_id: '6093842157',
      day: '3',
      activity_id: 'tok-7586942163234',
    },

    {
      day_id: 'X5J9B2H1Y0',
      itinerary_id: '6093842157',
      day: '4',
      activity_id: 'tok-2937465192387',
    },

    {
      day_id: 'X5J9B2H1Y0',
      itinerary_id: '6093842157',
      day: '4',
      activity_id: 'tok-2390687208349',
    },
    {
      day_id: 'X5J9B2H1Y0',
      itinerary_id: '6093842157',
      day: '4',
      activity_id: 'tok-2389746398756',
    },
    {
      day_id: 'X5J9B2H1Y0',
      itinerary_id: '6093842157',
      day: '4',
      activity_id: 'tok-3782469075413',
    },
    {
      day_id: 'B0F2W8G6T4',
      itinerary_id: '6093842157',
      day: '5',
      activity_id: 'tok-4795638921100',
    },
    {
      day_id: 'B0F2W8G6T4',
      itinerary_id: '6093842157',
      day: '5',
      activity_id: 'tok-3572860532205',
    },
    {
      day_id: 'B0F2W8G6T4',
      itinerary_id: '6093842157',
      day: '5',
      activity_id: 'tok-9128340683610',
    },
    {
      day_id: 'B0F2W8G6T4',
      itinerary_id: '6093842157',
      day: '5',
      activity_id: 'tok-8736459087632',
    },
    {
      day_id: 'B0F2W8G6T4',
      itinerary_id: '6093842157',
      day: '5',
      activity_id: 'tok-4563218739461',
    },

    {
      day_id: 'C1Z8D7S5F9',
      itinerary_id: '6093842157',
      day: '6',
      activity_id: 'tok-5638921729014',
    },
    {
      day_id: 'C1Z8D7S5F9',
      itinerary_id: '6093842157',
      day: '6',
      activity_id: 'tok-3749281682903',

    },
    {
      day_id: 'C1Z8D7S5F9',
      itinerary_id: '6093842157',
      day: '6',
      activity_id: 'tok-9018742306842',

    },
    {
      day_id: 'C1Z8D7S5F9',
      itinerary_id: '6093842157',
      day: '6',
      activity_id: 'tok-7534215678132',
    },

    {
      day_id: 'H9Y3R6M8L1',
      itinerary_id: '6093842157',
      day: '7',
      activity_id: 'tok-8347521946325',

    },
    {
      day_id: 'H9Y3R6M8L1',
      itinerary_id: '6093842157',
      day: '7',
      activity_id: 'tok-9864352347554',

    },
    {
      day_id: 'H9Y3R6M8L1',
      itinerary_id: '6093842157',
      day: '7',
      activity_id: 'tok-2874562345678',

    },
    {
      day_id: 'H9Y3R6M8L1',
      itinerary_id: '6093842157',
      day: '7',
      activity_id: 'tok-4534676534756',

    },
    {
      day_id: 'H9Y3R6M8L1',
      itinerary_id: '6093842157',
      day: '7',
      activity_id: 'tok-6734982356123',
    },
    {
      day_id: 'T5B7N2K3J1',
      itinerary_id: '6093842157',
      day: '8',
      activity_id: 'tok-7865432345654',
    },
    {
      day_id: 'T5B7N2K3J1',
      itinerary_id: '6093842157',
      day: '8',
      activity_id: 'tok-8356123456765',
    },
    {
      day_id: 'T5B7N2K3J1',
      itinerary_id: '6093842157',
      day: '8',
      activity_id: 'tok-7896542345789',
    },
    {
      day_id: 'A3X5C9V7F1',
      itinerary_id: '6093842157',
      day: '9',
      activity_id: 'tok-6843205792',
    },
    {
      day_id: 'A3X5C9V7F1',
      itinerary_id: '6093842157',
      day: '9',
      activity_id: 'tok-8765432123546',
    },
    {
      day_id: 'E7R0J3K2Z6',
      itinerary_id: '6093842157',
      day: '10',
      activity_id: 'tok-4632785402',
    },
    {
      day_id: 'E7R0J3K2Z6',
      itinerary_id: '6093842157',
      day: '10',
      activity_id: 'tok-5392816598',
    },
    {
      day_id: 'E7R0J3K2Z6',
      itinerary_id: '6093842157',
      day: '10',
      activity_id: 'tok-7586942163',
    },

    {
      day_id: 'S2N5H1B3Y9',
      itinerary_id: '3584217960',
      day: '1',
      activity_id: 'lon-4582693121549',
    },
    {
      day_id: 'S2N5H1B3Y9',
      itinerary_id: '3584217960',
      day: '1',
      activity_id: 'lon-7830214731234',
    }, {
      day_id: 'S2N5H1B3Y9',
      itinerary_id: '3584217960',
      day: '1',
      activity_id: 'lon-1234567890123',
    },
    {
      day_id: 'D9C8T0M7L2',
      itinerary_id: '3584217960',
      day: '2',
      activity_id: 'lon-2345678901234',
    },
    {
      day_id: 'D9C8T0M7L2',
      itinerary_id: '3584217960',
      day: '2',
      activity_id: 'lon-3456789012345',
    },
    {
      day_id: 'D9C8T0M7L2',
      itinerary_id: '3584217960',
      day: '2',
      activity_id: 'lon-4567890123456',
    },
    {
      day_id: 'D9C8T0M7L2',
      itinerary_id: '3584217960',
      day: '2',
      activity_id: 'lon-5678901234567',
    },

    {
      day_id: 'P5F7G1K8J0',
      itinerary_id: '3584217960',
      day: '3',
      activity_id: 'lon-7890123456789',
    },
    {
      day_id: 'P5F7G1K8J0',
      itinerary_id: '3584217960',
      day: '3',
      activity_id: 'lon-8901234567890',
    },
    {
      day_id: 'P5F7G1K8J0',
      itinerary_id: '3584217960',
      day: '3',
      activity_id: 'lon-9012345678901',
    },
    {
      day_id: 'P5F7G1K8J0',
      itinerary_id: '3584217960',
      day: '3',
      activity_id: 'lon-0123456789012',
    },
    {
      day_id: 'Q6L3T7N8H2',
      itinerary_id: '3584217960',
      day: '4',
      activity_id: 'lnd-3265847169842',
    },
    {
      day_id: 'Q6L3T7N8H2',
      itinerary_id: '3584217960',
      day: '4',
      activity_id: 'lnd-8736549871265',
    },
    {
      day_id: 'Q6L3T7N8H2',
      itinerary_id: '3584217960',
      day: '4',
      activity_id: 'lnd-1847563298745',
    },
    {
      day_id: 'Q4T9X7Z0N1',
      itinerary_id: '3584217960',
      day: '5',
      activity_id: 'lnd-4629857349812',
    },
    {
      day_id: 'Q4T9X7Z0N1',
      itinerary_id: '3584217960',
      day: '5',
      activity_id: 'lnd-2354687109865',
    },
    {
      day_id: 'Q4T9X7Z0N1',
      itinerary_id: '3584217960',
      day: '5',
      activity_id: 'lnd-5874902384759',
    },
    {
      day_id: 'Q4T9X7Z0N1',
      itinerary_id: '3584217960',
      day: '5',
      activity_id: 'lnd-7890234987215',
    },
    {
      day_id: 'U6S1J2D4B0',
      itinerary_id: '3584217960',
      day: '6',
      activity_id: 'lnd-9247103984723',
      activity_id: 'lnd-5729471236578',

    },
    {
      day_id: 'V0W8F2C3G9',
      itinerary_id: '3584217960',
      day: '7',
      activity_id: 'lon-6789012345678',
    },

    {
      day_id: 'L3K6N2H7M1',
      itinerary_id: '7491058362',
      day: '1',
      activity_id: 'lon-8901234567890',
    },
    {
      day_id: 'L3K6N2H7M1',
      itinerary_id: '7491058362',
      day: '1',
      activity_id: 'lon-9012345678901',
    }, {
      day_id: 'L3K6N2H7M1',
      itinerary_id: '7491058362',
      day: '1',
      activity_id: 'lon-7890123456789',
    },
    {
      day_id: 'L3K6N2H7M1',
      itinerary_id: '7491058362',
      day: '1',
      activity_id: 'lon-6789012345678',
    },
    {
      day_id: 'Y1R7Z3B5X0',
      itinerary_id: '7491058362',
      day: '2',
      activity_id: 'lon-0123456789012',
    },
    {
      day_id: 'Y1R7Z3B5X0',
      itinerary_id: '7491058362',
      day: '2',
      activity_id: 'lnd-3265847169842',
    },
    {
      day_id: 'Y1R7Z3B5X0',
      itinerary_id: '7491058362',
      day: '2',
      activity_id: 'lnd-8736549871265',

    },
    {
      day_id: 'Y1R7Z3B5X0',
      itinerary_id: '7491058362',
      day: '2',
      activity_id: 'lnd-4629857349812',

    },
    {
      day_id: 'Y1R7Z3B5X0',
      itinerary_id: '7491058362',
      day: '2',
      activity_id: 'lnd-1847563298745',
    },

    {
      day_id: 'M9T6N7C0J1',
      itinerary_id: '7491058362',
      day: '3',
      activity_id: 'lnd-2354687109865',
    },
    {
      day_id: 'M9T6N7C0J1',
      itinerary_id: '7491058362',
      day: '3',
      activity_id: 'lnd-5874902384759',
    },
    {
      day_id: 'M9T6N7C0J1',
      itinerary_id: '7491058362',
      day: '3',
      activity_id: 'lnd-789023498721',
    },
    {
      day_id: 'M9T6N7C0J1',
      itinerary_id: '7491058362',
      day: '3',
      activity_id: 'lnd-9247103984723',
    },
    {
      day_id: 'M9T6N7C0J1',
      itinerary_id: '7491058362',
      day: '3',
      activity_id: 'lnd-5729471236578',
    },

    {
      day_id: 'W0H2F5G1K7',
      itinerary_id: '9316742085',
      day: '1',
      activity_id: 'lnd-2354687109865',
    },

    {
      day_id: 'W0H2F5G1K7',
      itinerary_id: '9316742085',
      day: '1',
      activity_id: 'lnd-1847563298745',
    },

    {
      day_id: 'W0H2F5G1K7',
      itinerary_id: '9316742085',
      day: '1',
      activity_id: 'lnd-8736549871265',
    },
    {
      day_id: 'J1D8B6L9S5',
      itinerary_id: '9316742085',
      day: '2',
      activity_id: 'lnd-5874902384759',
    },
    {
      day_id: 'J1D8B6L9S5',
      itinerary_id: '9316742085',
      day: '2',
      activity_id: 'lnd-4629857349812',
    }, {
      day_id: 'J1D8B6L9S5',
      itinerary_id: '9316742085',
      day: '2',
      activity_id: 'lnd-3265847169842',
    },
    {
      day_id: 'J1D8B6L9S5',
      itinerary_id: '9316742085',
      day: '2',
      activity_id: 'lon-0123456789012',
    },
    {
      day_id: 'J1D8B6L9S5',
      itinerary_id: '9316742085',
      day: '2',
      activity_id: 'lon-9012345678901',
    },
    {
      day_id: 'Z6Y0A8C7T2',
      itinerary_id: '9316742085',
      day: '3',
      activity_id: 'lnd-9247103984723',
    },
    {
      day_id: 'Z6Y0A8C7T2',
      itinerary_id: '9316742085',
      day: '3',
      activity_id: 'lnd-5729471236578',
    },
    {
      day_id: 'Z6Y0A8C7T2',
      itinerary_id: '9316742085',
      day: '3',
      activity_id: 'lon-4582693121549',
    },
    {
      day_id: 'Z6Y0A8C7T2',
      itinerary_id: '9316742085',
      day: '3',
      activity_id: 'lon-7830214731234',
    },
    {
      day_id: 'F2K1N5J3M8',
      itinerary_id: '9316742085',
      day: '4',
      activity_id: 'lon-1234567890123',
    },
    {
      day_id: 'F2K1N5J3M8',
      itinerary_id: '9316742085',
      day: '4',
      activity_id: 'lon-2345678901234',
    },
    {
      day_id: 'F2K1N5J3M8',
      itinerary_id: '9316742085',
      day: '4',
      activity_id: 'lon-3456789012345',
    },
    {
      day_id: 'F2K1N5J3M8',
      itinerary_id: '9316742085',
      day: '4',
      activity_id: 'lon-4567890123456',
    },
    {
      day_id: 'F2K1N5J3M8',
      itinerary_id: '9316742085',
      day: '4',
      activity_id: 'lon-5678901234567',
    },
    {
      day_id: 'G1T6L0B3H9',
      itinerary_id: '9316742085',
      day: '5',
      activity_id: 'lon-6789012345678',
    },
    {
      day_id: 'G1T6L0B3H9',
      itinerary_id: '9316742085',
      day: '5',
      activity_id: 'lon-7890123456789',
    },
    {
      day_id: 'G1T6L0B3H9',
      itinerary_id: '9316742085',
      day: '5',
      activity_id: 'lon-8901234567890',
    },
    {
      day_id: 'G1T6L0B3H9',
      itinerary_id: '9316742085',
      day: '5',
      activity_id: 'lon-9012345678901',
    },
    {
      day_id: 'X3R5Z0D1V7',
      itinerary_id: '2065813795',
      day: '1',
      activity_id: 'nyc-8899001122334',
    },
    {
      day_id: 'X3R5Z0D1V7',
      itinerary_id: '2065813795',
      day: '1',
      activity_id: 'nyc-5566778899001',

    },
    {
      day_id: 'X3R5Z0D1V7',
      itinerary_id: '2065813795',
      day: '1',
      activity_id: 'nyc-4455667788990',
    },
    {
      day_id: 'X3R5Z0D1V6',
      itinerary_id: '2065813795',
      day: '2',
      activity_id: 'nyc-9012345678908',

    },
    {
      day_id: 'X3R5Z0D1V6',
      itinerary_id: '2065813795',
      day: '2',
      activity_id: 'nyc-890123456789',

    },
    {
      day_id: 'X3R5Z0D1V6',
      itinerary_id: '2065813795',
      day: '2',
      activity_id: 'nyc-789012345678',
    },

    {
      day_id: 'B8C7K6N9S5',
      itinerary_id: '2065813795',
      day: '3',
      activity_id: 'nyc-012345678912',
    },
    {
      day_id: 'B8C7K6N9S5',
      itinerary_id: '2065813795',
      day: '3',
      activity_id: 'nyc-123456789012',

    },
    {
      day_id: 'B8C7K6N9S5',
      itinerary_id: '2065813795',
      day: '3',
      activity_id: 'nyc-234567890123',

    },

    {
      day_id: 'H5J2G8F0M3',
      itinerary_id: '2065813794',
      day: '1',
      activity_id: 'nyc-6677889900112',
    },

    {
      day_id: 'X3R5Z0D1V8',
      itinerary_id: '2065813794',
      day: '2',
      activity_id: 'nyc-890123456789',

    },
    {
      day_id: 'B8C7K6N9S9',
      itinerary_id: '2065813794',
      day: '3',
      activity_id: 'nyc-234567890123',
    },

    {
      day_id: 'J5F7R9M1P0',
      itinerary_id: '8576931024',
      day: '1',
      activity_id: 'nyc-9012345678908',
    },
    {
      day_id: 'J5F7R9M1P0',
      itinerary_id: '8576931024',
      day: '1',
      activity_id: 'nyc-890123456789',
    },
    {
      day_id: 'J5F7R9M1P0',
      itinerary_id: '8576931024',
      day: '1',
      activity_id: 'nyc-789012345678',
    },
    {
      day_id: 'J5F7R9M1P0',
      itinerary_id: '8576931024',
      day: '1',
      activity_id: 'nyc-678901234567',
    },
    {
      day_id: 'J5F7R9M1P0',
      itinerary_id: '8576931024',
      day: '1',
      activity_id: 'nyc-567890123456',
    },
    {
      day_id: 'P7Z3T2W8D0',
      itinerary_id: '8576931024',
      day: '2',
      activity_id: 'nyc-456789012345',
    },
    {
      day_id: 'P7Z3T2W8D0',
      itinerary_id: '8576931024',
      day: '2',
      activity_id: 'nyc-345678901234',
    },
    {
      day_id: 'P7Z3T2W8D0',
      itinerary_id: '8576931024',
      day: '2',
      activity_id: 'nyc-234567890123',
    },
    {
      day_id: 'P7Z3T2W8D0',
      itinerary_id: '8576931024',
      day: '2',
      activity_id: 'nyc-123456789012',
    },
    {
      day_id: 'P7Z3T2W8D0',
      itinerary_id: '8576931024',
      day: '2',
      activity_id: 'nyc-012345678912',
    },
    {
      day_id: 'Q5S2F0Y1L8',
      itinerary_id: '5132879460',
      day: '1',
      activity_id: 'nyc-012345678912',
    },
    {
      day_id: 'Q5S2F0Y1L8',
      itinerary_id: '5132879460',
      day: '1',
      activity_id: 'nyc-123456789012',

    },
    {
      day_id: 'Q5S2F0Y1L8',
      itinerary_id: '5132879460',
      day: '1',
      activity_id: 'nyc-234567890123',
    },

    {
      day_id: 'N4M1K6H7B0',
      itinerary_id: '5132879460',
      day: '2',
      activity_id: 'nyc-345678901234',
    },
    {
      day_id: 'N4M1K6H7B0',
      itinerary_id: '5132879460',
      day: '2',
      activity_id: 'nyc-456789012345',

    },
    {
      day_id: 'N4M1K6H7B0',
      itinerary_id: '5132879460',
      day: '2',
      activity_id: 'nyc-567890123456',
    },
    {
      day_id: 'N4M1K6H7B0',
      itinerary_id: '5132879460',
      day: '2',
      activity_id: 'nyc-678901234567',

    },
    {
      day_id: 'U8R0X5C1V3',
      itinerary_id: '5132879460',
      day: '3',
      activity_id: 'nyc-890123456789',
    },
    {
      day_id: 'U8R0X5C1V3',
      itinerary_id: '5132879460',
      day: '3',
      activity_id: 'nyc-9012345678908',
    },
    {
      day_id: 'L6D8T2J3N0',
      itinerary_id: '5132879460',
      day: '4',
      activity_id: 'nyc-789012345678',
    },
    {
      day_id: 'L6D8T2J3N0',
      itinerary_id: '5132879460',
      day: '4',
      activity_id: 'nyc-890123456789',
    },
    {
      day_id: 'L6D8T2J3N0',
      itinerary_id: '5132879460',
      day: '4',
      activity_id: 'nyc-9012345678908',

    },
    {
      day_id: 'L6D8T2J3N0',
      itinerary_id: '5132879460',
      day: '4',
      activity_id: 'nyc-0987654321122',
    },

    {
      day_id: 'V5G2B9W4F1',
      itinerary_id: '5132879460',
      day: '5',
      activity_id: 'nyc-1122334455667',
    },

    {
      day_id: 'V5G2B9W4F1',
      itinerary_id: '5132879460',
      day: '5',
      activity_id: 'nyc-2233445566778',

    },
    {
      day_id: 'V5G2B9W4F1',
      itinerary_id: '5132879460',
      day: '5',
      activity_id: 'nyc-3344556677889',
    },
    {
      day_id: 'R4J5K7H0N1',
      itinerary_id: '5132879460',
      day: '6',
      activity_id: 'nyc-4455667788990',
    },
    {
      day_id: 'R4J5K7H0N1',
      itinerary_id: '5132879460',
      day: '6',
      activity_id: 'nyc-5566778899001',
    },
    {
      day_id: 'R4J5K7H0N1',
      itinerary_id: '5132879460',
      day: '6',
      activity_id: 'nyc-6677889900112',
    },
    {
      day_id: 'A2S6C1Z0F8',
      itinerary_id: '9753216840',
      day: '1',
      activity_id: 'nyc-8899001122334',
    },
    {
      day_id: 'E0X9B6Y2T7',
      itinerary_id: '9753216840',
      day: '2',
      activity_id: 'nyc-3344556677889',
    },
    {
      day_id: 'E0X9B6Y2T7',
      itinerary_id: '9753216840',
      day: '2',
      activity_id: 'nyc-2233445566778',
    },
    {
      day_id: 'E0X9B6Y2T7',
      itinerary_id: '9753216840',
      day: '2',
      activity_id: 'nyc-1122334455667',

    },
    {
      day_id: 'E0X9B6Y2T7',
      itinerary_id: '9753216840',
      day: '2',
      activity_id: 'nyc-0987654321122',

    },
    {
      day_id: 'E0X9B6Y2T7',
      itinerary_id: '9753216840',
      day: '2',
      activity_id: 'nyc-9012345678908',

    },

    {
      day_id: 'Z8D5C2L6M1',
      itinerary_id: '6743192850',
      day: '1',
      activity_id: 'nyc-8899001122334',
    },

    {
      day_id: 'Z8D5C2L6M1',
      itinerary_id: '6743192850',
      day: '1',
      activity_id: 'nyc-7788990011223',

    },

    {
      day_id: 'Z8D5C2L6M1',
      itinerary_id: '6743192850',
      day: '1',
      activity_id: 'nyc-6677889900112',
    },

    {
      day_id: 'Y1F0V2W6G9',
      itinerary_id: '6743192850',
      day: '2',
      activity_id: 'nyc-4455667788990',

    },
    {
      day_id: 'Y1F0V2W6G9',
      itinerary_id: '6743192850',
      day: '2',
      activity_id: 'nyc-3344556677889',
    },

    {
      day_id: 'Y1F0V2W6G9',
      itinerary_id: '6743192850',
      day: '2',
      activity_id: 'nyc-2233445566778',
    },
    {
      day_id: 'S3K9J2H8R6',
      itinerary_id: '6743192850',
      day: '3',
      activity_id: 'nyc-5566778899001',
    },
    {
      day_id: 'S3K9J2H8R6',
      itinerary_id: '6743192850',
      day: '3',
      activity_id: 'nyc-1122334455667',
    },
    {
      day_id: 'S3K9J2H8R6',
      itinerary_id: '6743192850',
      day: '3',
      activity_id: 'nyc-0987654321122',

    },
    {
      day_id: 'S3K9J2H8R6',
      itinerary_id: '6743192850',
      day: '3',
      activity_id: 'nyc-9012345678908',
    },

    {
      day_id: 'M6T1N0C3D2',
      itinerary_id: '6743192850',
      day: '4',
      activity_id: 'nyc-890123456789',
    },
    {
      day_id: 'M6T1N0C3D2',
      itinerary_id: '6743192850',
      day: '4',
      activity_id: 'nyc-789012345678',

    },
    {
      day_id: 'M6T1N0C3D2',
      itinerary_id: '6743192850',
      day: '4',
      activity_id: 'nyc-678901234567',

    },
    {
      day_id: 'M6T1N0C3D2',
      itinerary_id: '6743192850',
      day: '4',
      activity_id: 'nyc-567890123456',

    },

    {
      day_id: 'D8G2K4N6H9',
      itinerary_id: '6743192850',
      day: '5',
      activity_id: 'nyc-456789012345',
    },
    {
      day_id: 'D8G2K4N6H9',
      itinerary_id: '6743192850',
      day: '5',
      activity_id: 'nyc-345678901234',

    },
    {
      day_id: 'D8G2K4N6H9',
      itinerary_id: '6743192850',
      day: '5',
      activity_id: 'nyc-234567890123',

    },
    {
      day_id: 'D8G2K4N6H9',
      itinerary_id: '6743192850',
      day: '5',
      activity_id: 'nyc-123456789012',
    },

    {
      day_id: 'B9X3Z0V6H2',
      itinerary_id: '6743192850',
      day: '6',
      activity_id: 'nyc-012345678912',
    },
    {
      day_id: 'B9X3Z0V6H2',
      itinerary_id: '6743192850',
      day: '6',
      activity_id: 'par-2345678901234',
    },
    {
      day_id: 'B9X3Z0V6H2',
      itinerary_id: '6743192850',
      day: '6',
      activity_id: 'par-8901234567801',
    },

    {
      day_id: 'F8G6L0R5J1',
      itinerary_id: '6743192850',
      day: '7',
      activity_id: 'par-0123456789098',
    },
    {
      day_id: 'F8G6L0R5J1',
      itinerary_id: '6743192850',
      day: '7',
      activity_id: 'par-0987612345678',

    },

    {
      day_id: 'R5G3L0J1M8',
      itinerary_id: '1248630975',
      day: '1',
      activity_id: 'chi-4237659180987',
    },
    {
      day_id: 'R5G3L0J1M8',
      itinerary_id: '1248630975',
      day: '1',
      activity_id: 'chi-9023487654321',

    },
    {
      day_id: 'R5G3L0J1M8',
      itinerary_id: '1248630975',
      day: '1',
      activity_id: 'chi-9783075584516',

    },
    {
      day_id: 'R5G3L0J1M8',
      itinerary_id: '1248630975',
      day: '1',
      activity_id: 'chi-2309587061234',

    },
    {
      day_id: 'R5G3L0J1M8',
      itinerary_id: '1248630975',
      day: '1',
      activity_id: 'chi-9102381756089',

    },
    {
      day_id: 'R5G3L0J1M8',
      itinerary_id: '1248630975',
      day: '1',
      activity_id: 'chi-7710238479654',

    },

    {
      day_id: 'C1T7D9N2K6',
      itinerary_id: '1248630975',
      day: '2',
      activity_id: 'chi-6458321487291',
    },
    {
      day_id: 'C1T7D9N2K6',
      itinerary_id: '1248630975',
      day: '2',
      activity_id: 'chi-3928671151243',
    },
    {
      day_id: 'C1T7D9N2K6',
      itinerary_id: '1248630975',
      day: '2',
      activity_id: 'chi-3450986732109',
    },
    {
      day_id: 'C1T7D9N2K6',
      itinerary_id: '1248630975',
      day: '2',
      activity_id: 'chi-1986734590876',
    },

    {
      day_id: 'C1T7D9N2K6',
      itinerary_id: '1248630975',
      day: '2',
      activity_id: 'chi-6578910342569',
    },
    {
      day_id: 'C1T7D9N2K6',
      itinerary_id: '1248630975',
      day: '2',
      activity_id: 'chi-6830421534790',
    },
    {
      day_id: 'W5H0Y1S8J2',
      itinerary_id: '1248630975',
      day: '3',
      activity_id: 'chi-2938465190783',
    },
    {
      day_id: 'W5H0Y1S8J2',
      itinerary_id: '1248630975',
      day: '3',
      activity_id: 'chi-5167903248170',
    },
    {
      day_id: 'W5H0Y1S8J2',
      itinerary_id: '1248630975',
      day: '3',
      activity_id: 'chi-3948601245809',
    },
    {
      day_id: 'W5H0Y1S8J2',
      itinerary_id: '1248630975',
      day: '3',
      activity_id: 'chi-7569193596049',
    },
    {
      day_id: 'W5H0Y1S8J2',
      itinerary_id: '1248630975',
      day: '3',
      activity_id: 'chi-7532910486709',
    },
    {
      day_id: 'W5H0Y1S8J2',
      itinerary_id: '1248630975',
      day: '3',
      activity_id: 'chi-2380569935861',
    },
    {
      day_id: 'W5H0Y1S8J2',
      itinerary_id: '1248630975',
      day: '3',
      activity_id: 'chi-5561876512399',
    },
    {
      day_id: 'Q2F6Z1B0K8',
      itinerary_id: '1248630975',
      day: '4',
      activity_id: 'chi-6458321487291',

    },
    {
      day_id: 'Q2F6Z1B0K8',
      itinerary_id: '1248630975',
      day: '4',
      activity_id: 'chi-6432908175362',
    },
    {
      day_id: 'Q2F6Z1B0K8',
      itinerary_id: '1248630975',
      day: '4',
      activity_id: 'chi-3120765489032',

    }, {
      day_id: 'Q2F6Z1B0K8',
      itinerary_id: '1248630975',
      day: '4',
      activity_id: 'chi-3114788004565',

    },
    {
      day_id: 'N9M5J2L1S4',
      itinerary_id: '1248630975',
      day: '5',
      activity_id: 'chi-4298710365498',
    },
    {
      day_id: 'N9M5J2L1S4',
      itinerary_id: '1248630975',
      day: '5',
      activity_id: 'chi-7084632109854',
    },
    {
      day_id: 'N9M5J2L1S4',
      itinerary_id: '1248630975',
      day: '5',
      activity_id: 'chi-5432109876345',
    },
    {
      day_id: 'N9M5J2L1S4',
      itinerary_id: '1248630975',
      day: '5',
      activity_id: 'chi-8110121822778',
    },
    {
      day_id: 'N9M5J2L1S4',
      itinerary_id: '1248630975',
      day: '5',
      activity_id: 'chi-7240954826703',
    },

    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-6458321487291',
    },
    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-3928671151243',
    },
    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-2380569935861',
    },
    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-9023487654321',

    },
    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-8765490123870',
    },
    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-1354678902341',
    },
    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-9804321765098',

    },
    {
      day_id: 'U0R4X1T7G',
      itinerary_id: '3560829147',
      day: '1',
      activity_id: 'chi-8712369851203',
    },

    {
      day_id: 'E2T6C8L1S7',
      itinerary_id: '3560829147',
      day: '2',
      activity_id: 'chi-3901248765032',
    },
    {
      day_id: 'E2T6C8L1S7',
      itinerary_id: '3560829147',
      day: '2',
      activity_id: 'chi-7860543291805',
    },
    {
      day_id: 'E2T6C8L1S7',
      itinerary_id: '3560829147',
      day: '2',
      activity_id: 'chi-3450986732109',
    },

    {
      day_id: 'W3K1J7N2H8',
      itinerary_id: '3560829147',
      day: '3',
      activity_id: 'chi-2304981765901',
    },
    {
      day_id: 'W3K1J7N2H8',
      itinerary_id: '3560829147',
      day: '3',
      activity_id: 'chi-3120765489032',
    },
    {
      day_id: 'W3K1J7N2H8',
      itinerary_id: '3560829147',
      day: '3',
      activity_id: 'chi-3114788004565',
    },
    {
      day_id: 'W3K1J7N2H8',
      itinerary_id: '3560829147',
      day: '3',
      activity_id: 'chi-4069837123561',
    },
    {
      day_id: 'S4F8W1N6B2',
      itinerary_id: '6925108347',
      day: '1',
      activity_id: 'par-012345678901',

    },
    {
      day_id: 'S4F8W1N6B2',
      itinerary_id: '6925108347',
      day: '1',
      activity_id: 'par-123456789012',
    },
    {
      day_id: 'S4F8W1N6B2',
      itinerary_id: '6925108347',
      day: '1',
      activity_id: 'par-234567890123',
    },
    {
      day_id: 'T8Y5P6K7J3',
      itinerary_id: '6925108347',
      day: '2',
      activity_id: 'par-345678901234',
    },
    {
      day_id: 'T8Y5P6K7J3',
      itinerary_id: '6925108347',
      day: '2',
      activity_id: 'par-456789012345',
    },
    {
      day_id: 'T8Y5P6K7J3',
      itinerary_id: '6925108347',
      day: '2',
      activity_id: 'par-567890123456',

    },
    {
      day_id: 'T8Y5P6K7J3',
      itinerary_id: '6925108347',
      day: '2',
      activity_id: 'par-678901234567',

    },
    {
      day_id: 'G2L1H9Q4M6',
      itinerary_id: '6925108347',
      day: '3',
      activity_id: 'par-789012345678',
    },
    {
      day_id: 'G2L1H9Q4M6',
      itinerary_id: '6925108347',
      day: '3',
      activity_id: 'par-890123456789',
    },
    {
      day_id: 'G2L1H9Q4M6',
      itinerary_id: '6925108347',
      day: '3',
      activity_id: 'par-901234567890',
    },
    {
      day_id: 'G2L1H9Q4M6',
      itinerary_id: '6925108347',
      day: '3',
      activity_id: 'par-098765432112',
    },

    {
      day_id: 'U7A2R6E5N3',
      itinerary_id: '6925108347',
      day: '4',
      activity_id: 'par-765432109876',
    },
    {
      day_id: 'U7A2R6E5N3',
      itinerary_id: '6925108347',
      day: '4',
      activity_id: 'par-234567890123',
    },
    {
      day_id: 'U7A2R6E5N3',
      itinerary_id: '6925108347',
      day: '4',
      activity_id: 'par-456789012345',
    },
    {
      day_id: 'U7A2R6E5N3',
      itinerary_id: '6925108347',
      day: '4',
      activity_id: 'par-876543210987',
    },

    {
      day_id: 'D9X3Z5V8F1',
      itinerary_id: '6925108347',
      day: '5',
      activity_id: 'par-543210987654',
    },
    {
      day_id: 'D9X3Z5V8F1',
      itinerary_id: '6925108347',
      day: '5',
      activity_id: 'par-321098765432',
    },
    {
      day_id: 'D9X3Z5V8F1',
      itinerary_id: '6925108347',
      day: '5',
      activity_id: 'par-789012345677',
    },

    {
      day_id: 'U6W8Z2L5D0',
      itinerary_id: '8316092754',
      day: '1',
      activity_id: 'par-345678901234',
    },
    {
      day_id: 'U6W8Z2L5D0',
      itinerary_id: '8316092754',
      day: '1',
      activity_id: 'par-456789012345',
    },
    {
      day_id: 'U6W8Z2L5D0',
      itinerary_id: '8316092754',
      day: '1',
      activity_id: 'par-567890123456',
    },
    {
      day_id: 'F4S1Y7K9J0',
      itinerary_id: '8316092754',
      day: '2',
      activity_id: 'par-678901234567',
    },
    {
      day_id: 'F4S1Y7K9J0',
      itinerary_id: '8316092754',
      day: '2',
      activity_id: 'par-789012345677',
    },
    {
      day_id: 'F4S1Y7K9J0',
      itinerary_id: '8316092754',
      day: '2',
      activity_id: 'par-890123456789',
    },
    {
      day_id: 'F4S1Y7K9J0',
      itinerary_id: '8316092754',
      day: '2',
      activity_id: 'par-901234567890',
    },
    {
      day_id: 'Q0R1L7D9N6',
      itinerary_id: '8316092754',
      day: '3',
      activity_id: 'par-765432109876',
    },
    {
      day_id: 'Q0R1L7D9N6',
      itinerary_id: '8316092754',
      day: '3',
      activity_id: 'par-234567890123',
    },

    {
      day_id: 'Q0R1L7D9N6',
      itinerary_id: '8316092754',
      day: '3',
      activity_id: 'par-456789012345',
    },
    {
      day_id: 'Q0R1L7D9N6',
      itinerary_id: '8316092754',
      day: '3',
      activity_id: 'par-543210987654',
    },
    {
      day_id: 'Q0R1L7D9N6',
      itinerary_id: '8316092754',
      day: '3',
      activity_id: 'par-876543210987',
    },

    {
      day_id: 'B8E7T0C1K4',
      itinerary_id: '8316092754',
      day: '4',
      activity_id: 'par-789012345677',

    },
    {
      day_id: 'B8E7T0C1K4',
      itinerary_id: '8316092754',
      day: '4',
      activity_id: 'par-678901234567',

    },
    {
      day_id: 'B8E7T0C1K4',
      itinerary_id: '8316092754',
      day: '4',
      activity_id: 'par-210987654321',

    },
    {
      day_id: 'G1Z9X0N7V5',
      itinerary_id: '2750691483',
      day: '1',
      activity_id: 'par-234567890123',

    },

    {
      day_id: 'G1Z9X0N7V5',
      itinerary_id: '2750691483',
      day: '1',
      activity_id: 'par-012345678901',

    }, {
      day_id: 'G1Z9X0N7V5',
      itinerary_id: '2750691483',
      day: '1',
      activity_id: 'par-678901234567',

    },
    {
      day_id: 'T6H1K7L5J8',
      itinerary_id: '2750691483',
      day: '2',
      activity_id: 'par-210987654321',
      activity_id: 'par-789012345678',
      activity_id: 'par-321098765432',
      activity_id: 'par-876543210987',

    },
    {
      day_id: 'C9N1P8T2W7',
      itinerary_id: '2750691483',
      day: '3',
      activity_id: 'par-543210987654',
      activity_id: 'par-456789012345',
      activity_id: 'par-234567890123',
      activity_id: 'par-765432109876',

    },
    {
      day_id: 'X0E2L5M7K1',
      itinerary_id: '4091567283',
      day: '1',
      activity_id: 'par-012345678901',
      activity_id: 'par-123456789012',
      activity_id: 'par-234567890123',

    },
    {
      day_id: 'Y3W8N2T1Q0',
      itinerary_id: '4091567283',
      day: '2',
      activity_id: 'par-345678901234',
      activity_id: 'par-456789012345',
      activity_id: 'par-567890123456',
      activity_id: 'par-678901234567',

    },

    {
      day_id: 'Z1R7F6L9D3',
      itinerary_id: '4091567283',
      day: '3',
      activity_id: 'par-789012345678',
      activity_id: 'par-890123456789',
      activity_id: 'par-901234567890',
      activity_id: 'par-098765432112',
      activity_id: 'par-765432109876',

    },

    {
      day_id: 'L6B3G7V0R8',
      itinerary_id: '4091567283',
      day: '4',
      activity_id: 'par-234567890123',
      activity_id: 'par-456789012345',
      activity_id: 'par-543210987654',
      activity_id: 'par-876543210987',
      activity_id: 'par-321098765432',

    },

    {
      day_id: 'P2F7X9K6Z1',
      itinerary_id: '4091567283',
      day: '5',
      activity_id: 'par-789012345678',
      activity_id: 'par-210987654321',
      activity_id: 'par-2345678901234',
      activity_id: 'par-8901234567801',

    },

    {
      day_id: 'D3S8B0W7N2',
      itinerary_id: '4091567283',
      day: '6',
      activity_id: 'par-678901234567',
      activity_id: 'par-0123456789098',
      activity_id: 'par-0987612345678',
    },

    {
      day_id: 'E5J2V7K1S6',
      itinerary_id: '4091567283',
      day: '7',
      activity_id: 'par-0987612345678',
      activity_id: 'par-5432109876543',
    },

    {
      day_id: 'M4K9Y1B0X7',
      itinerary_id: '6280351974',
      day: '1',
      activity_id: 'par-0123456789098',
      activity_id: 'par-0987612345678',
      activity_id: 'par-5432109876543',
      activity_id: 'par-2345678901234',

    },

    {
      day_id: 'H7Z5N3J0V6',
      itinerary_id: '6280351974',
      day: '2',
      activity_id: 'par-8901234567801',
      activity_id: 'par-1234509876543',
      activity_id: 'par-0987654321011',
      activity_id: 'par-678901234561',
      activity_id: 'par-210987654321',

    },
    {
      day_id: 'J2C9D1N8W0',
      itinerary_id: '6280351974',
      day: '3',
      activity_id: 'par-789012345678',
      activity_id: 'par-321098765432',
      activity_id: 'par-876543210987',
      activity_id: 'par-543210987654',

    },
    {
      day_id: 'V5S7E3L8P2',
      itinerary_id: '9378461025',
      day: '1',
      activity_id: 'rom-0123456789012',
    },
    {
      day_id: 'U2W8B1Z0E4',
      itinerary_id: '9378461025',
      day: '2',
      activity_id: 'rom-0123456789016',
    },
    {
      day_id: 'U2W8B1Z0E4',
      itinerary_id: '9378461025',
      day: '2',
      activity_id: 'rom-0123456789018',
    },
    {
      day_id: 'U2W8B1Z0E4',
      itinerary_id: '9378461025',
      day: '2',
      activity_id: 'rom-0123456789017',
    },
    {
      day_id: 'N4L0V6F1S5',
      itinerary_id: '9378461025',
      day: '3',
      activity_id: 'rom-0123456789019',
    },
    {
      day_id: 'N4L0V6F1S5',
      itinerary_id: '9378461025',
      day: '3',
      activity_id: 'rom-0123456789020',
    },
    {
      day_id: 'N4L0V6F1S5',
      itinerary_id: '9378461025',
      day: '3',
      activity_id: 'rom-0123456789021',
    },
    {
      day_id: 'N4L0V6F1S5',
      itinerary_id: '9378461025',
      day: '3',
      activity_id: 'rom-0123456789022',
    },

    {
      day_id: 'Q7T1K6C2D9',
      itinerary_id: '9378461025',
      day: '4',
      activity_id: 'rom-0123456789020',
    },
    {
      day_id: 'Q7T1K6C2D9',
      itinerary_id: '9378461025',
      day: '4',
      activity_id: 'rom-0123456789019',
    },
    {
      day_id: 'Q7T1K6C2D9',
      itinerary_id: '9378461025',
      day: '4',
      activity_id: 'rom-0123456789018',
    },
    {
      day_id: 'Q7T1K6C2D9',
      itinerary_id: '9378461025',
      day: '4',
      activity_id: 'rom-0123456789021',
    },
    {
      day_id: 'F9M5X2L7J1',
      itinerary_id: '9378461025',
      day: '5',
      activity_id: 'rom-0123456789019',
    },
    {
      day_id: 'W6E8Z3L2J7',
      itinerary_id: '9378461025',
      day: '6',
      activity_id: 'rom-0123456789016',
    },
    {
      day_id: 'S1G0K2E8C9',
      itinerary_id: '5082371649',
      day: '1',
      activity_id: 'rom-0123456789013',
    },
    {
      day_id: 'S1G0K2E8C9',
      itinerary_id: '5082371649',
      day: '1',
      activity_id: 'rom-0123456789014',
    },
    {
      day_id: 'S1G0K2E8C9',
      itinerary_id: '5082371649',
      day: '1',
      activity_id: 'rom-0123456789015',
    },
    {
      day_id: 'S1G0K2E8C9',
      itinerary_id: '5082371649',
      day: '1',
      activity_id: 'rom-0123456789016',
    },
    {
      day_id: 'S1G0K2E8C9',
      itinerary_id: '5082371649',
      day: '1',
      activity_id: 'rom-0123456789017',
    },
    {
      day_id: 'K8R2Y1M9P3',
      itinerary_id: '5082371649',
      day: '2',
      activity_id: 'rom-0123456789018',
    },
    {
      day_id: 'K8R2Y1M9P3',
      itinerary_id: '5082371649',
      day: '2',
      activity_id: 'rom-0123456789019',
    },
    {
      day_id: 'K8R2Y1M9P3',
      itinerary_id: '5082371649',
      day: '2',
      activity_id: 'rom-0123456789020',
    },
    {
      day_id: 'A3T7Q2L1Z9',
      itinerary_id: '5082371649',
      day: '3',
      activity_id: 'rom-0123456789021',
    },
    {
      day_id: 'A3T7Q2L1Z9',
      itinerary_id: '5082371649',
      day: '3',
      activity_id: 'rom-0123456789018',
    },
    {
      day_id: 'A3T7Q2L1Z9',
      itinerary_id: '5082371649',
      day: '3',
      activity_id: 'rom-0123456789019',
    },
    {
      day_id: 'X9P6N3K7V0',
      itinerary_id: '5082371649',
      day: '4',
      activity_id: 'rom-0123456789021',
    },

    {
      day_id: 'R0D2G1T8E9',
      itinerary_id: '5082371649',
      day: '5',
      activity_id: 'rom-0123456789023',
    },

    {
      day_id: 'R0D2G1T8E9',
      itinerary_id: '5082371649',
      day: '5',
      activity_id: 'rom-0123456789012',
    },
    {
      day_id: 'Y7V5H6N1L8',
      itinerary_id: '4265809731',
      day: '1',
      activity_id: 'mil-012345678910',
    },
    {
      day_id: 'Y7V5H6N1L8',
      itinerary_id: '4265809731',
      day: '1',
      activity_id: 'mil-012345678909',
    }, {
      day_id: 'Y7V5H6N1L8',
      itinerary_id: '4265809731',
      day: '1',
      activity_id: 'mil-012345678908',
    }, {
      day_id: 'Y7V5H6N1L8',
      itinerary_id: '4265809731',
      day: '1',
      activity_id: 'mil-012345678907'
    },
    {
      day_id: 'B2C8Z1F9M0',
      itinerary_id: '4265809731',
      day: '2',
      activity_id: 'mil-012345678906',
    },
    {
      day_id: 'B2C8Z1F9M0',
      itinerary_id: '4265809731',
      day: '2',
      activity_id: 'mil-012345678905',
    },
    {
      day_id: 'B2C8Z1F9M0',
      itinerary_id: '4265809731',
      day: '2',
      activity_id: 'mil-012345678904',
    }, {
      day_id: 'B2C8Z1F9M0',
      itinerary_id: '4265809731',
      day: '2',
      activity_id: 'mil-012345678903'
    },
    {
      day_id: 'F9K1X8D7G2',
      itinerary_id: '4265809731',
      day: '3',
      activity_id: 'mil-012345678902',
    },

    {
      day_id: 'H6T8W2A9J3',
      itinerary_id: '9481750236',
      day: '1',
      activity_id: 'ven-012345678912',
    },
    {
      day_id: 'H6T8W2A9J3',
      itinerary_id: '9481750236',
      day: '1',
      activity_id: 'ven-012345678913',
    }, {
      day_id: 'H6T8W2A9J3',
      itinerary_id: '9481750236',
      day: '1',
      activity_id: 'ven-012345678914',
    }, {
      day_id: 'H6T8W2A9J3',
      itinerary_id: '9481750236',
      day: '1',
      activity_id: 'ven-012345678915',
    },
    {
      day_id: 'L5P7Z9M2N8',
      itinerary_id: '9481750236',
      day: '2',
      activity_id: 'ven-012345678916',
    },
    {
      day_id: 'L5P7Z9M2N8',
      itinerary_id: '9481750236',
      day: '2',
      activity_id: 'ven-012345678917',
    }, {
      day_id: 'L5P7Z9M2N8',
      itinerary_id: '9481750236',
      day: '2',
      activity_id: 'ven-012345678918',
    }, {
      day_id: 'L5P7Z9M2N8',
      itinerary_id: '9481750236',
      day: '2',
      activity_id: 'ven-012345678919',
    },
    {
      day_id: 'Q2Y9T6K1B3',
      itinerary_id: '9481750236',
      day: '3',
      activity_id: 'ven-012345678920',
    },
    {
      day_id: 'S7A3N1D5F2',
      itinerary_id: '3059274618',
      day: '1',
      activity_id: 'bkk-000002',
    },
    {
      day_id: 'R8J6W9B2T1',
      itinerary_id: '3059274618',
      day: '2',
      activity_id: 'bkk-000003',
    },
    {
      day_id: 'G5X9D4H7K1',
      itinerary_id: '3059274618',
      day: '3',
      activity_id: 'bkk-000005',
    },
    {
      day_id: 'U1M3N6B8F4',
      itinerary_id: '3059274618',
      day: '4',
      activity_id: 'bkk-000008',
    },
    {
      day_id: 'E3S2Z7R9P5',
      itinerary_id: '3059274618',
      day: '5',
      activity_id: 'bkk-000009',
    },
    {
      day_id: 'N2T6B1D7K4',
      itinerary_id: '3059274618',
      day: '6',
      activity_id: 'bkk-0123456789026',
    },
    {
      day_id: 'N2T6B1D7K4',
      itinerary_id: '3059274618',
      day: '6',
      activity_id: 'bkk-000011',
    },
    {
      day_id: 'A8W1Y4K6D9',
      itinerary_id: '6827315490',
      day: '1',
      activity_id: 'bkk-0123456789030',
    },
    {
      day_id: 'V9B4D2H6R3',
      itinerary_id: '6827315490',
      day: '2',
      activity_id: 'bkk-0123456789028',
    },
    {
      day_id: 'V9B4D2H6R3',
      itinerary_id: '6827315490',
      day: '2',
      activity_id: 'bkk-0123456789029',
    },
    {
      day_id: 'J4K5N1S7W8',
      itinerary_id: '6827315490',
      day: '3',
      activity_id: 'bkk-0123456789026',
    },
    {
      day_id: 'J4K5N1S7W8',
      itinerary_id: '6827315490',
      day: '3',
      activity_id: 'bkk-0123456789027',
    },
    {
      day_id: 'T6S2H9A3F7',
      itinerary_id: '6827315490',
      day: '4',
      activity_id: 'bkk-000010',
    },
    {
      day_id: 'T6S2H9A3F7',
      itinerary_id: '6827315490',
      day: '4',
      activity_id: 'bkk-000011',
    },
    {
      day_id: 'C2M8D7F1N6',
      itinerary_id: '6827315490',
      day: '5',
      activity_id: 'bkk-000008',
    },
    {
      day_id: 'C2M8D7F1N6',
      itinerary_id: '6827315490',
      day: '5',
      activity_id: 'bkk-000009',
    },
    {
      day_id: 'B1K6J9T7Z4',
      itinerary_id: '6827315490',
      day: '6',
      activity_id: 'bkk-000007',
    },
    {
      day_id: 'Z9W1F5H6J8',
      itinerary_id: '6827315490',
      day: '7',
      activity_id: 'bkk-000005',
    },
    {
      day_id: 'Z9W1F5H6J8',
      itinerary_id: '6827315490',
      day: '7',
      activity_id: 'bkk-000004',
    },
    {
      day_id: 'D6K1H8F2B9',
      itinerary_id: '6827315490',
      day: '8',
      activity_id: 'bkk-000003',
    },
    {
      day_id: 'M7D5N9Z1W3',
      itinerary_id: '6827315490',
      day: '9',
      activity_id: 'bkk-000001',
    },
    {
      day_id: 'Q3T6H2K9P5',
      itinerary_id: '6827315490',
      day: '10',
      activity_id: 'bkk-000002',
    },
    {
      day_id: 'L8R5N1K7H3',
      itinerary_id: '9712356480',
      day: '1',
      activity_id: 'bkk-000001',
    },
    {
      day_id: 'G7W8D1B3S5',
      itinerary_id: '9712356480',
      day: '2',
      activity_id: 'bkk-000004',
    },
    {
      day_id: 'G7W8D1B3S5',
      itinerary_id: '9712356480',
      day: '2',
      activity_id: 'bkk-000005',
    },
    {
      day_id: 'G7W8D1B3S5',
      itinerary_id: '9712356480',
      day: '2',
      activity_id: 'bkk-000006',
    },
    {
      day_id: 'G7W8D1B3S5',
      itinerary_id: '9712356480',
      day: '2',
      activity_id: 'bkk-000007',
    },
    {
      day_id: 'S2F3R8J9K6',
      itinerary_id: '7410293658',
      day: '1',
      activity_id: 'han-123456789012',
    },
    {
      day_id: 'U5H9B3N1W8',
      itinerary_id: '7410293658',
      day: '2',
      activity_id: 'han-345678901234',
    },
    {
      day_id: 'E1P7D5K6F9',
      itinerary_id: '7410293658',
      day: '3',
      activity_id: 'han-456789012345',
    },
    {
      day_id: 'N9B2K7M5D1',
      itinerary_id: '7410293658',
      day: '4',
      activity_id: 'han-678901234567',
    },
    {
      day_id: 'A6T8H2F4K1',
      itinerary_id: '7410293658',
      day: '5',
      activity_id: 'han-890123456789',
    },
    {
      day_id: 'V1D7H8F5K9',
      itinerary_id: '7410293658',
      day: '6',
      activity_id: 'han-901234567890',
    },
    {
      day_id: 'J9K2N8W1D3',
      itinerary_id: '2106853479',
      day: '1',
      activity_id: 'snt-123456789012',
    },
    {
      day_id: 'C1M9N3D8F6',
      itinerary_id: '2106853479',
      day: '2',
      activity_id: 'snt-012345678901',
    },
    {
      day_id: 'Z8Q2T9K4R1',
      itinerary_id: '2106853479',
      day: '3',
      activity_id: 'snt-456789012345',
    },
    {
      day_id: 'F3S1E8H7D4',
      itinerary_id: '2106853479',
      day: '4',
      activity_id: 'snt-678901234567',
    },
    {
      day_id: 'J9N4A3T6K8',
      itinerary_id: '2106853479',
      day: '5',
      activity_id: 'snt-901234567890',
    },
    {
      day_id: 'U5X3G1C7M2',
      itinerary_id: '5672981340',
      day: '1',
      activity_id: 'snt-012345678901'
    },
    {
      day_id: 'L7R8Z2K6P1',
      itinerary_id: '5672981340',
      day: '2',
      activity_id: 'snt-234567890123'
    },
    {
      day_id: 'C2N1E8D7H9',
      itinerary_id: '5672981340',
      day: '3',
      activity_id: 'snt-123456789012'
    },
    {
      day_id: 'W6G9F2T8J1',
      itinerary_id: '5672981340',
      day: '4',
      activity_id: 'snt-345678901234'
    },
    {
      day_id: 'B4L6N9C7P3',
      itinerary_id: '5672981340',
      day: '5',
      activity_id: 'snt-456789012345'
    },
    {
      day_id: 'D8T1E5Z6X2',
      itinerary_id: '5672981340',
      day: '6',
      activity_id: 'snt-567890123456'
    },
    {
      day_id: 'R2N6F8B7D5',
      itinerary_id: '5672981340',
      day: '7',
      activity_id: 'snt-678901234567'
    },
    {
      day_id: 'V7P5K1J6C8',
      itinerary_id: '5672981340',
      day: '8',
      activity_id: 'snt-789012345678'
    },
    {
      day_id: 'G5F9H3L7R1',
      itinerary_id: '5672981340',
      day: '9',
      activity_id: 'snt-890123456789'
    },
    {
      day_id: 'Y3K7P2B6R8',
      itinerary_id: '8374051962',
      day: '1',
      activity_id: 'ams-0123456789012',
    },
    {
      day_id: 'T1E6H8Z7D9',
      itinerary_id: '8374051962',
      day: '2',
      activity_id: 'ams-0123456789020',

    },
    {
      day_id: 'M2R7G4F1B8',
      itinerary_id: '8374051962',
      day: '3',
      activity_id: 'ams-0123456789019',

    },
    {
      day_id: 'H4C6N1J7T3',
      itinerary_id: '8374051962',
      day: '4',
      activity_id: 'ams-0123456789018',
    },

    {
      day_id: 'S8L7P5K9X2',
      itinerary_id: '8374051962',
      day: '5',
      activity_id: 'ams-0123456789017',
    },
    {
      day_id: 'N9D6E1B7H2',
      itinerary_id: '2634809157',
      day: '1',
      activity_id: 'ams-0123456789012',
    },
    {
      day_id: 'N9D6E1B7H2',
      itinerary_id: '2634809157',
      day: '1',
      activity_id: 'ams-0123456789012',
      activity_id: 'ams-0123456789013',
    },
    {
      day_id: 'Z1K7J8C2P5',
      itinerary_id: '2634809157',
      day: '2',
      activity_id: 'ams-0123456789017',
    },
    {
      day_id: 'Z1K7J8C2P5',
      itinerary_id: '2634809157',
      day: '2',
      activity_id: 'ams-0123456789015',
    },
    {
      day_id: 'L9R2H7N4D1',
      itinerary_id: '2634809157',
      day: '3',
      activity_id: 'ams-0123456789018',
    },
    {
      day_id: 'L9R2H7N4D1',
      itinerary_id: '2634809157',
      day: '3',
      activity_id: 'ams-0123456789019',
    },
    {
      day_id: 'L9R2H7N4D1',
      itinerary_id: '2634809157',
      day: '3',
      activity_id: 'ams-0123456789020',
    },
    {
      day_id: 'X6F8T3B4G1',
      itinerary_id: '4156092873',
      day: '1',
      activity_id: 'ams-0123456789021',
    },
    {
      day_id: 'C3N8E7D4H9',
      itinerary_id: '4156092873',
      day: '2',
      activity_id: 'ams-0123456789018',
    },
    {
      day_id: 'C3N8E7D4H9',
      itinerary_id: '4156092873',
      day: '2',
      activity_id: 'ams-0123456789019',
    },
    {
      day_id: 'P7K9J6M4L1',
      itinerary_id: '4156092873',
      day: '3',
      activity_id: 'ams-0123456789016',
    },
    {
      day_id: 'B1D5H7Z2T6',
      itinerary_id: '4156092873',
      day: '4',
      activity_id: 'ams-0123456789015',
    },
    {
      day_id: 'R8N2F1L9C7',
      itinerary_id: '9267431508',
      day: '1',
      activity_id: 'rio-012345678912',
    },
    {
      day_id: 'E6X2G7T8Z5',
      itinerary_id: '9267431508',
      day: '2',
      activity_id: 'rio-109876543210',
    },
    {
      day_id: 'V5P3K6J1B8',
      itinerary_id: '9267431508',
      day: '3',
      activity_id: 'rio-234567890123',
    },
    {
      day_id: 'G9F5H7L3R6',
      itinerary_id: '9267431508',
      day: '4',
      activity_id: 'rio-345678901234',
    },
    {
      day_id: 'Y7K8P2B5R1',
      itinerary_id: '9267431508',
      day: '5',
      activity_id: 'rio-456789012345',
    },
    {
      day_id: 'G4D6E1J8N2',
      itinerary_id: '9267431508',
      day: '6',
      activity_id: 'rio-567890123456',
    },
    {
      day_id: 'V5B2F1C7K9',
      itinerary_id: '9267431508',
      day: '7',
      activity_id: 'rio-678901234567',
    },
    {
      day_id: 'W9X2U6T1D7',
      itinerary_id: '9267431508',
      day: '8',
      activity_id: 'rio-789012345678',
    },
    {
      day_id: 'H8K2V7L5A6',
      itinerary_id: '9267431508',
      day: '9',
      activity_id: 'rio-890123456789',
    },
    {
      day_id: 'M1T6C9J8G3',
      itinerary_id: '9267431508',
      day: '10',
      activity_id: 'rio-0987654321123',
    },
    {
      day_id: 'Z7V1R5K8B3',
      itinerary_id: '1785934620',
      day: '1',
      activity_id: 'rio-890123456789',
    },
    {
      day_id: 'S6E3G7A2M9',
      itinerary_id: '1785934620',
      day: '2',
      activity_id: 'rio-567890123456',
    },
    {
      day_id: 'F9R3L6N8P3',
      itinerary_id: '1785934620',
      day: '3',
      activity_id: 'rio-678901234567',
    },
    {
      day_id: 'F9R3L6N8P2',
      itinerary_id: '1785934620',
      day: '4',
      activity_id: 'rio-234567890123',
    },
    {
      day_id: 'L3P6D2H7T8',
      itinerary_id: '1785934620',
      day: '5',
      activity_id: 'rio-012345678912',
    },

    {
      day_id: 'A8V2N1K7E6',
      itinerary_id: '5801273649',
      day: '1',
      activity_id: 'rio-0987654321123',
    },
    {
      day_id: 'C6U9T1J4L7',
      itinerary_id: '5801273649',
      day: '2',
      activity_id: 'rio-345678901234',
    },
    {
      day_id: 'X4K8B5N1V2',
      itinerary_id: '5801273649',
      day: '3',
      activity_id: 'rio-456789012345',
    },
    {
      day_id: 'E7L4C9J6S2',
      itinerary_id: '5801273649',
      day: '4',
      activity_id: 'rio-567890123456',
    },
    {
      day_id: 'J1B5D7G2N3',
      itinerary_id: '5801273649',
      day: '5',
      activity_id: 'rio-678901234567',
    },
    {
      day_id: 'U3T2G6E1K7',
      itinerary_id: '5801273649',
      day: '6',
      activity_id: 'rio-789012345678',
    },
    {
      day_id: 'N2K1B5J8H3',
      itinerary_id: '5801273649',
      day: '7',
      activity_id: 'rio-890123456789',
    },
    {
      day_id: 'P7G3R9L4N6',
      itinerary_id: '3048562791',
      day: '1',
      activity_id: 'lis-012345678901',
    },
    {
      day_id: 'D5N1V7J4A6',
      itinerary_id: '3048562791',
      day: '2',
      activity_id: 'lis-012345678908',

    },
    {
      day_id: 'T4E6H7K8P2',
      itinerary_id: '3048562791',
      day: '3',
      activity_id: 'lis-012345678909',

    },
    {
      day_id: 'B9N8C2G1S5',
      itinerary_id: '3048562791',
      day: '4',
      activity_id: 'lis-012345678904',
    },
    {
      day_id: 'R6L8T2V1J3',
      itinerary_id: '3048562791',
      day: '5',
      activity_id: 'lis-012345678905',
    },
    {
      day_id: 'K7J1N9B5V3',
      itinerary_id: '3048562791',
      day: '6',
      activity_id: 'lis-012345678907',

    },
    {
      day_id: 'K7J1N9B5V2',
      itinerary_id: '7913462058',
      day: '1',
      activity_id: 'lis-012345678910',
    },
    {
      day_id: 'V9T6L3R8N7',
      itinerary_id: '7913462058',
      day: '2',
      activity_id: 'lis-012345678907',
    },
    {
      day_id: 'G3B5K1V7L2',
      itinerary_id: '7913462058',
      day: '3',
      activity_id: 'lis-012345678906',
    },
    {
      day_id: 'X2N3C6J7T9',
      itinerary_id: '1056829374',
      day: '1',
      activity_id: 'lis-012345678902',
    },
    {
      day_id: 'E8V7K2L1N5',
      itinerary_id: '1056829374',
      day: '2',
      activity_id: 'lis-012345678903',
    },
    {
      day_id: 'W6T1N7J5G2',
      itinerary_id: '1056829374',
      day: '3',
      activity_id: 'lis-012345678905',
    },
    {
      day_id: 'W6T1N7J5G2',
      itinerary_id: '1056829374',
      day: '3',
      activity_id: 'lis-012345678906',
    },
    {
      day_id: 'A7N1K9J6V4',
      itinerary_id: '1056829374',
      day: '4',
      activity_id: 'lis-012345678907',
    },
    {
      day_id: 'A7N1K9J6V4',
      itinerary_id: '1056829374',
      day: '4',
      activity_id: 'lis-012345678908',
    },
    {
      day_id: 'K5F2W1H8J9',
      itinerary_id: '1056829374',
      day: '5',
      activity_id: 'lis-012345678910',
    },
    {
      day_id: 'K5F2W1H8J9',
      itinerary_id: '1056829374',
      day: '5',
      activity_id: 'lis-012345678909',
    },
    {
      day_id: 'A7E9G5I2C8',
      itinerary_id: '4291638750',
      day: '1',
      activity_id: 'lis-012345678910',
    },
    {
      day_id: 'A7E9G5I2C8',
      itinerary_id: '4291638750',
      day: '1',
      activity_id: 'lis-012345678909',
    },
    {
      day_id: 'T6Y2H1K9Q3',
      itinerary_id: '4291638750',
      day: '2',
      activity_id: 'lis-012345678907',
    },
    {
      day_id: 'T6Y2H1K9Q3',
      itinerary_id: '4291638750',
      day: '2',
      activity_id: 'lis-012345678908',
    },
    {
      day_id: 'R9M2X7V5F3',
      itinerary_id: '4291638750',
      day: '3',
      activity_id: 'lis-012345678905',
    },
    {
      day_id: 'R9M2X7V5F3',
      itinerary_id: '4291638750',
      day: '3',
      activity_id: 'lis-012345678906',
    },
    {
      day_id: 'U8L6B3Z1N7',
      itinerary_id: '6835912470',
      day: '1',
      activity_id: 'rey-0123456789012',
    },
    {
      day_id: 'E5I7S8F9R4',
      itinerary_id: '6835912470',
      day: '2',
      activity_id: 'rey-0123456789013',
    },
    {
      day_id: 'J6C4T9K3G8',
      itinerary_id: '6835912470',
      day: '3',
      activity_id: 'rey-0123456789014',
    },
    {
      day_id: 'W4Z2A3N6L7',
      itinerary_id: '6835912470',
      day: '4',
      activity_id: 'rey-0123456789015',
    },
    {
      day_id: 'P9B6H2T1Q4',
      itinerary_id: '6835912470',
      day: '5',
      activity_id: 'rey-0123456789016',
    },
    {
      day_id: 'V8S5M1N7L6',
      itinerary_id: '6835912470',
      day: '6',
      activity_id: 'rey-0123456789017',
    },
    {
      day_id: 'G6T8R9H4K3',
      itinerary_id: '6835912470',
      day: '7',
      activity_id: 'rey-0123456789018',
    },
    {
      day_id: 'C9J3S8M2W1',
      itinerary_id: '6835912470',
      day: '8',
      activity_id: 'rey-0123456789019',
    },
    {
      day_id: 'X4L7Y6N3K8',
      itinerary_id: '6835912470',
      day: '9',
      activity_id: 'rey-0123456789020',
    },
    {
      day_id: 'N9P2H7V1Q4',
      itinerary_id: '6835912470',
      day: '10',
      activity_id: 'rey-0987654321011',
    },
    {
      day_id: 'B1K6Z8F7T5',
      itinerary_id: '8452069371',
      day: '1',
      activity_id: 'rey-0123456789015',
    },
    {
      day_id: 'B1K6Z8F7T5',
      itinerary_id: '8452069371',
      day: '1',
      activity_id: 'rey-0123456789014',
    },
    {
      day_id: 'M8A7W5Z1H6',
      itinerary_id: '8452069371',
      day: '2',
      activity_id: 'rey-0123456789016',
    },
    {
      day_id: 'M8A7W5Z1H6',
      itinerary_id: '8452069371',
      day: '2',
      activity_id: 'rey-0123456789017',
    },
    {
      day_id: 'Q6T9F8B7M2',
      itinerary_id: '8452069371',
      day: '3',
      activity_id: 'rey-0123456789018',
    },
    {
      day_id: 'Q6T9F8B7M2',
      itinerary_id: '8452069371',
      day: '3',
      activity_id: 'rey-0123456789019',
    },
    {
      day_id: 'L7V5Z1N3X2',
      itinerary_id: '8452069371',
      day: '4',
      activity_id: 'rey-0123456789020',
    },
    {
      day_id: 'L7V5Z1N3X2',
      itinerary_id: '8452069371',
      day: '4',
      activity_id: 'rey-0987654321011',
    },
    {
      day_id: 'D9E6J7K3H2',
      itinerary_id: '5089362741',
      day: '1',
      activity_id: 'sin-0123456789016',
    },
    {
      day_id: 'D9E6J7K3H2',
      itinerary_id: '5089362741',
      day: '1',
      activity_id: 'sin-0123456789018',
    },
    {
      day_id: 'S5R8M1V7N3',
      itinerary_id: '5089362741',
      day: '2',
      activity_id: 'sin-0123456789021',
    },
    {
      day_id: 'S5R8M1V7N3',
      itinerary_id: '5089362741',
      day: '2',
      activity_id: 'sin-0123456789019',
    },
    {
      day_id: 'F3G7K9J2B5',
      itinerary_id: '1298437605',
      day: '1',
      activity_id: 'sin-0123456789021',
    },
    {
      day_id: 'F3G7K9J2B5',
      itinerary_id: '1298437605',
      day: '1',
      activity_id: 'sin-0123456789019',
    },
    {
      day_id: 'H2T8R7N6M1',
      itinerary_id: '1298437605',
      day: '2',
      activity_id: 'sin-0123456789012',
    },
    {
      day_id: 'H2T8R7N6M1',
      itinerary_id: '1298437605',
      day: '2',
      activity_id: 'sin-0123456789014',
    },
    {
      day_id: 'Z1L5Y3X8V7',
      itinerary_id: '1298437605',
      day: '3',
      activity_id: 'sin-0123456789015',
    },
    {
      day_id: 'Z1L5Y3X8V7',
      itinerary_id: '1298437605',
      day: '3',
      activity_id: 'sin-0123456789016',
    },
    {
      day_id: 'Z1L5Y3X8V7',
      itinerary_id: '1298437605',
      day: '3',
      activity_id: 'sin-0123456789017',
    },
    {
      day_id: 'Y6F7B9J5D2',
      itinerary_id: '2461587930',
      day: '1',
      activity_id: 'bcn-0987654321123',
    },
    {
      day_id: 'K8C3M5V7Q2',
      itinerary_id: '2461587930',
      day: '2',
      activity_id: 'bcn-0987654321125',
    },
    {
      day_id: 'K8C3M5V7Q2',
      itinerary_id: '2461587930',
      day: '2',
      activity_id: 'bcn-0987654321126',
    },
    {
      day_id: 'W9H6Z2J1L7',
      itinerary_id: '2461587930',
      day: '3',
      activity_id: 'bcn-0987654321127',
    },
    {
      day_id: 'W9H6Z2J1L7',
      itinerary_id: '2461587930',
      day: '3',
      activity_id: 'bcn-0987654321128',
    },

    {
      day_id: 'N2M8V1S5G4',
      itinerary_id: '5729186304',
      day: '1',
      activity_id: 'bcn-0987654321127',
    },
    {
      day_id: 'N2M8V1S5G4',
      itinerary_id: '5729186304',
      day: '1',
      activity_id: 'bcn-0987654321128',
    },
    {
      day_id: 'U6B4T8J9S3',
      itinerary_id: '5729186304',
      day: '2',
      activity_id: 'bcn-0987654321129',
    },
    {
      day_id: 'V7N1Z3A8L6',
      itinerary_id: '5729186304',
      day: '3',
      activity_id: 'bcn-0987654321125',
    },
    {
      day_id: 'Q2K5F7H3D8',
      itinerary_id: '8714620935',
      day: '1',
      activity_id: 'mad-098765432116',
    },
    {
      day_id: 'W3P8D6K5R9',
      itinerary_id: '8714620935',
      day: '2',
      activity_id: 'mad-098765432113',
    },
    {
      day_id: 'J9T4H1A8E6',
      itinerary_id: '8714620935',
      day: '3',
      activity_id: 'mad-098765432114',
    },
    {
      day_id: 'F2V1K0N8D7',
      itinerary_id: '8714620935',
      day: '4',
      activity_id: 'mad-098765432115',

    },
    {
      day_id: 'X6U9B0T2P3',
      itinerary_id: '3459726180',
      day: '1',
      activity_id: 'cai-8901234567890',
    },
    {
      day_id: 'L2R1G7K3V9',
      itinerary_id: '3459726180',
      day: '2',
      activity_id: 'cai-7890123456789',
    },
    {
      day_id: 'E3T6H8N0P7',
      itinerary_id: '3459726180',
      day: '3',
      activity_id: 'cai-5678901234567',
    },
    {
      day_id: 'Q9X8D1Z5M6',
      itinerary_id: '6028574319',
      day: '1',
      activity_id: 'cai-2345678901234',
    },
    {
      day_id: 'Y2C1T6U8H0',
      itinerary_id: '6028574319',
      day: '2',
      activity_id: 'cai-1234567890123',
    },
    {
      day_id: 'B7V2N5X9F4',
      itinerary_id: '6028574319',
      day: '3',
      activity_id: 'cai-9012345678901',
      activity_id: 'cai-8901234567890',
    },
    {
      day_id: 'P4K6G7S5F9',
      itinerary_id: '6028574319',
      day: '4',
      activity_id: 'cai-7890123456789',
    },
    {
      day_id: 'A1W5J8N7M3',
      itinerary_id: '6028574319',
      day: '5',
      activity_id: 'cai-5678901234567',
    },
    {
      day_id: 'Z9D3P6B8H0',
      itinerary_id: '9742160583',
      day: '1',
      activity_id: 'bei-0987654321123',
    },
    {
      day_id: 'G5K2R8V1W0',
      itinerary_id: '9742160583',
      day: '2',
      activity_id: 'pek-6789012345678',
    },
    {
      day_id: 'G5K2R8V1W0',
      itinerary_id: '9742160583',
      day: '2',
      activity_id: 'pek-7890123456789',
    },
    {
      day_id: 'S7D1X9N3C8',
      itinerary_id: '9742160583',
      day: '3',
      activity_id: 'pek-5678901234567',
    },
    {
      day_id: 'S7D1X9N3C8',
      itinerary_id: '9742160583',
      day: '3',
      activity_id: 'pek-4567890123456',
    },
    {
      day_id: 'T0N7R6D2B4',
      itinerary_id: '9742160583',
      day: '4',
      activity_id: 'pek-3456789012345',
    },
    {
      day_id: 'T0N7R6D2B4',
      itinerary_id: '9742160583',
      day: '4',
      activity_id: 'pek-2345678901234',
    },
    {
      day_id: 'F8R2Z1V7L5',
      itinerary_id: '9742160583',
      day: '5',
      activity_id: 'pek-1234567890123',
    },
    {
      day_id: 'F8R2Z1V7L5',
      itinerary_id: '9742160583',
      day: '5',
      activity_id: 'pek-0123456789012',
    },
    {
      day_id: 'M4S6N2C9J7',
      itinerary_id: '3680452197',
      day: '1',
      activity_id: 'pek-0123456789012'
    },
    {
      day_id: 'V5J0W4H1K8',
      itinerary_id: '3680452197',
      day: '2',
      activity_id: 'pek-1234567890123'
    },

    {
      day_id: 'U6P9B0T8F1',
      itinerary_id: '3680452197',
      day: '3',
      activity_id: 'pek-2345678901234'
    },

    {
      day_id: 'N1V7D2Z5J0',
      itinerary_id: '3680452197',
      day: '4',
      activity_id: 'pek-3456789012345'
    },

    {
      day_id: 'H8T6P3G0K9',
      itinerary_id: '3680452197',
      day: '5',
      activity_id: 'pek-4567890123456'
    },

    {
      day_id: 'K2W1R9J0V7',
      itinerary_id: '3680452197',
      day: '6',
      activity_id: 'pek-5678901234567'
    },

    {
      day_id: 'Q6B3T8P0Z1',
      itinerary_id: '3680452197',
      day: '7',
      activity_id: 'pek-6789012345678'
    },

    {
      day_id: 'X9V7D1N0K3',
      itinerary_id: '3680452197',
      day: '8',
      activity_id: 'pek-7890123456789'
    },

    {
      day_id: 'L3R6G7K0V1',
      itinerary_id: '3680452197',
      day: '9',
      activity_id: 'pek-8901234567890'
    },

    {
      day_id: 'E8T2H5N9P7',
      itinerary_id: '3680452197',
      day: '10',
      activity_id: 'bei-0987654321123'
    },

    {
      day_id: 'Y4C1T8U0H6',
      itinerary_id: '8916230745',
      day: '1',
      activity_id: 'sha-012345678901',
    },
    {
      day_id: 'B9V5N4X8F0',
      itinerary_id: '8916230745',
      day: '2',
      activity_id: 'sha-012345678902',
    },
    {
      day_id: 'P7K6G5S4F8',
      itinerary_id: '8916230745',
      day: '3',
      activity_id: 'sha-012345678903',
    },
    {
      day_id: 'A5W1J0N8M7',
      itinerary_id: '8916230745',
      day: '4',
      activity_id: 'sha-012345678904',
    },
    {
      day_id: 'L9Z2G7R1H5',
      itinerary_id: '8916230745',
      day: '5',
      activity_id: 'sha-012345678905',
    },
    {
      day_id: 'D6W8C3P7T1',
      itinerary_id: '8916230745',
      day: '6',
      activity_id: 'sha-012345678906',
    },
    {
      day_id: 'S4M9B8X3V7',
      itinerary_id: '8916230745',
      day: '7',
      activity_id: 'sha-012345678907',
    },
    {
      day_id: 'J1K6T8R2P9',
      itinerary_id: '5412736098',
      day: '1',
      activity_id: 'msm-0123456789019',
    },
    {
      day_id: 'A2B5C4D7E9',
      itinerary_id: '5412736098',
      day: '2',
      activity_id: 'msm-0123456789018',
    },
    {
      day_id: 'P4T9S6G2K8',
      itinerary_id: '5412736098',
      day: '3',
      activity_id: 'msm-0123456789017',
    },
    {
      day_id: 'L8N4M1H5J2',
      itinerary_id: '5412736098',
      day: '4',
      activity_id: 'msm-0123456789016',
    },
    {
      day_id: 'F2G9C4K7S1',
      itinerary_id: '5412736098',
      day: '5',
      activity_id: 'msm-0123456789015',
    },
    {
      day_id: 'W5V8T4K6M1',
      itinerary_id: '5412736098',
      day: '6',
      activity_id: 'msm-0123456789014',
    },
    {
      day_id: 'R7S4N1J9C8',
      itinerary_id: '5412736098',
      day: '7',
      activity_id: 'msm-0123456789013',
    },
    {
      day_id: 'U9X2W5N3F8',
      itinerary_id: '5412736098',
      day: '8',
      activity_id: 'msm-0123456789012',
    },

    {
      day_id: 'D2V6K8J5M7',
      itinerary_id: '7082164953',
      day: '1',
      activity_id: 'acc-0123456789026',
    },
    {
      day_id: 'L5H7Z1R9E8',
      itinerary_id: '7082164953',
      day: '2',
      activity_id: 'acc-0123456789025',
    },
    {
      day_id: 'T1Y9B6U7P4',
      itinerary_id: '7082164953',
      day: '3',
      activity_id: 'acc-0123456789024',
    },
    {
      day_id: 'Q2Z5E1J6C7',
      itinerary_id: '7082164953',
      day: '4',
      activity_id: 'acc-0123456789023',
    },
    {
      day_id: 'S6U9V3K1N2',
      itinerary_id: '7082164953',
      day: '5',
      activity_id: 'acc-0123456789022',
    },
    {
      day_id: 'R3F8H5M7D2',
      itinerary_id: '7082164953',
      day: '6',
      activity_id: 'acc-0123456789021',
    },
    {
      day_id: 'P1T9U7B6Y8',
      itinerary_id: '7082164953',
      day: '7',
      activity_id: 'acc-0123456789020',
    },
    {
      day_id: 'W5N2X7V3K8',
      itinerary_id: '9537140268',
      day: '1',
      activity_id: 'eln-0123456789024',
    },
    {
      day_id: 'E8L2Z1R9H7',
      itinerary_id: '9537140268',
      day: '2',
      activity_id: 'eln-0123456789023',
    },
    {
      day_id: 'V5L6R9D8K2',
      itinerary_id: '9537140268',
      day: '3',
      activity_id: 'eln-0123456789022',
    },
    {
      day_id: 'V5L6R9D8K2',
      itinerary_id: '9537140268',
      day: '3',
      activity_id: 'eln-0123456789021'
    },
    {
      day_id: 'U6N2P4G7Z1',
      itinerary_id: '9537140268',
      day: '4',
      activity_id: 'eln-0123456789019',
    },
    {
      day_id: 'F8H5A6B9M1',
      itinerary_id: '9537140268',
      day: '5',
      activity_id: 'eln-0123456789018',
    },

  ]);
};