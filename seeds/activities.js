exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activites').del();
  await knex('activites').insert([
    // chicago
    {
      activity_id: 'chi-6458321487291',
      activity_name: 'Millennium park',
      activity_type: 'Parks',
      cost: "FREE",
      activity_description: 'The Park’s unique, immense outdoor concert venue was designed by renowned architect Frank Gehry and spans much of the park. This is where you’ll find much of the activity!',
      activity_image: ''
    },

    {
      activity_id: 'chi-3928671151243',
      activity_name: 'Cloud Gate',
      activity_type: 'Sights & Landmarks',
      cost: "FREE",
      activity_description: 'Cloud Gate is the most recognizable Chicago landmark. The seamless sculpture reflects the Chicago skyline. And when you walk beneath it, it reflects you as well from myriad angles. Shaped similarly to a bean, it’s affectionately referred to by locals as ‘the bean’.',
      activity_image: ''
    },
    {
      activity_id: 'chi-2380569935861',
      activity_name: 'Crown Foundtain',
      activity_type: 'Sights & Landmarks',
      cost: "FREE",
      activity_description: 'Public sculpture with a pair of 50-ft. LED towers & a reflecting pool, by Jaume Plensa, a Catalan. There will also be a number of special events going on in the park from late spring to early fall, so do a little research before your visit to see what’s on. You can expect everything from prestigious concerts to fund food festivals to free yoga.',
      activity_image: ''
    },
    {
      activity_id: 'chi-5561876512399',
      activity_name: 'Art Institute of Chicago',
      activity_type: 'Museums',
      cost: "$25 for adult, free for children",
      activity_description: 'Beautifully set out, the Art Institute is a fantastic experience and a great start to your Chicago Itinerary. Its displays are always rotating and being added to, so if you’ve been here years ago, don’t let that stop you from going again.',
      activity_image: ''
    },

    {
      activity_id: 'chi-7710238479654',
      activity_name: 'Willis Tower',
      activity_type: 'Observation Deck',
      cost: "$25",
      activity_description: 'For the most spectacular views, the best time to visit Skydeck Chicago is either just after opening or after 5 pm. If you’re planning on catching the sunset or taking in the twinkling nightscape of Chicago, you should plan on arriving 30-45 minutes before sunset.',
      activity_image: ''
    },
    {
      activity_id: 'chi-4237659180987',
      activity_name: 'Union Station',
      activity_type: 'Sights & Landmark',
      cost: 'FREE',
      activity_description: 'An iconic building and a marvel of modern transportation for nearly a century, Chicago’s Union Station was originally designed by Daniel Burnham and completed by Graham, Anderson, Probst and White. A grand building worthy of the city’s status as a national railroad hub, it is a treasured part of Chicago history and a valued asset for Chicago’s future.',
      activity_image: ''
    },

    {
      activity_id: 'chi-9102381756089',
      activity_name: 'Lyric Opera of Chicago',
      activity_type: 'Concerts & Shows',
      cost: '',
      activity_description: "Is one of the leading opera companies in the United States. It was founded in Chicago in 1954, under the name 'Lyric Theatre of Chicago'.The company was re-organized by Fox in 1956 under its present name and, after her 1981 departure, it has continued to be of one of the major opera companies in the United States.",
      activity_image: ''
    },
    {
      activity_id: 'chi-2309587061234',
      activity_name: 'Navy Pier',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Go for a ride on the iconic Centennial Wheel, with fantastic views over Chicago and Lake Michigan. Explore virtual reality or test your strength on the climbing wall. Navy Pier is also the primary departure point for many lake cruises and bus tours, so it's the perfect place to go if you have a little more time than expected!",
      activity_image: ''
    },

    {
      activity_id: 'chi-4069837123561',
      activity_name: "Chicago Children's Museum",
      activity_type: 'Museums',
      cost: '',
      activity_description: "Family museum on Navy Pier with lots of hands-on-exhibits, including many for young kids.",
      activity_image: ''
    },
    {
      activity_id: 'chi-6830421534790',
      activity_name: 'John Hancock Center',
      activity_type: 'Observation Deck',
      cost: 'FREE',
      activity_description: "Skyscraper observation deck offering panoramic city views from 1,000 feet up, plus food & drink. Perfect for sunset views!",
      activity_image: ''
    },

    {
      activity_id: 'chi-8712369851203',
      activity_name: '360 Chicago',
      activity_type: 'Observation Deck',
      cost: '',
      activity_description: "360 CHICAGO is the newly renovated observation deck of the iconic John Hancock Tower, located on Michigan Avenue. A visit here is both a great photo opportunity and a good chance to learn more about Chicago’s famous architecture. From your 94th floor vantage point (over 1000 feet in the air!), you’ll get unparalleled, 360-degree views of the Lake Michigan and the city below. ",
      activity_image: ''
    },

    {
      activity_id: 'chi-1354678902341',
      activity_name: 'Magnificent Mile',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "The Magnificent Mile is Chicago’s premier commercial district. The vibrant, bustling area is home to upscale shops, luxe fashion outlets, cool restaurants, and posh hotels. Landmarks include the historic Chicago Water Tower, the neo-Gothic Tribune Tower, the terracotta Wrigley Building skyscraper, and the 100-story John Hancock Center, which has a rooftop observation deck with fine dining and panoramic city views.",
      activity_image: ''
    },
    {
      activity_id: 'chi-9804321765098',
      activity_name: 'Tribune Tower',
      activity_type: 'Historical Landmark',
      cost: 'FREE',
      activity_description: "Neo-Gothic skyscraper influenced by Rouen Cathedral & decorated with rocks from world landmarks.",
      activity_image: ''
    },
    {
      activity_id: 'chi-2938465190783',
      activity_name: 'DuSable Bridge',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Long-standing drawbridge honoring a founder of Chicago & decorated with sculptures & plaques.",
      activity_image: ''
    },
    {
      activity_id: 'chi-7532910486709',
      activity_name: 'Chicago Cultural Center',
      activity_type: 'Shopping',
      cost: 'FREE',
      activity_description: "The whole building is covered in beautiful mosaics. With a giant glass dome and ornate staircases, it’s a wonderful place to go even when nothing else is going on. It’s a lovely place to relax and take in some beauty.",
      activity_image: ''
    },
    {
      activity_id: 'chi-1048732598602',
      activity_name: 'The Chicago Theatre',
      activity_type: 'Concerts & Shows',
      cost: '',
      activity_description: "French Baroque-style 3,600-seat auditorium showcasing national musical & comedy acts since 1921. The Chicago Theatre is a legendary venue in the heart of the Windy City.",
      activity_image: ''
    },
    {
      activity_id: 'chi-4298710365498',
      activity_name: 'Untitled by Picasso',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Standing 50 feet tall and weighing over 160 tons, the Chicago Picasso in Daley Plaza is much more than just artwork to Chicagoans. The untitled Picasso sculpture that originally sparked controversy in the city has now become one of Chicago’s most famous sculptures and beloved icons.",
      activity_image: ''
    },
    {
      activity_id: 'chi-7321659087432',
      activity_name: 'Adler Planetarium',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: "Upon opening in 1930, became the first planetarium in the Western Hemisphere. The building is more than a museum; it’s a laboratory, a classroom, and a community exploring the universe together. Visitors flock to the Adler to experience interactive exhibits, live planetarium shows, hands-on educational programs, and world-class collections.",
      activity_image: ''
    },
    {
      activity_id: 'chi-2304981765901',
      activity_name: 'Shedd Aquarium',
      activity_type: 'Aquarium',
      cost: '$40 GA, $30 for Children',
      activity_description: "What a win! We recommend reserving at least 2-3 hours for this attraction – there's so much to see and do. ",
      activity_image: ''
    },

    {
      activity_id: 'chi-5167903248170',
      activity_name: 'Field Musem',
      activity_type: 'Museums',
      cost: '',
      activity_description: "The Field Museum has spent over 100 years curating and adding to its collections, so you know their selection and breadth of artifacts and objects will be impressive. Some of the highlights of their collection include SUE, the famous T-Rex (the most complete skeleton of her species), the notorious Tsavo Lions, an extensive collection of Ancient Egyptian artifacts, a beautiful selection of gemstones and minerals, and the fun “Underground Adventure” exhibit. We recommend reserving between 1-2 hours for this attraction. ",
      activity_image: ''
    },

    {
      activity_id: 'chi-3948601245809',
      activity_name: 'Agora',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "As you approach Agora in Grant Park, you'll be struck by the imposing scale and eerie beauty of the sculpture's metal figures, which appear to be walking purposefully and without heads.",
      activity_image: ''
    },

    {
      activity_id: 'chi-1986734590876',
      activity_name: 'Grand Park',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "One of the biggest parks and foundtains in the world! Surrounding the Millenium Park and extending far beyond it is Grant Park. This giant public park is affectionately referred to as ‘Chicago’s front yard’, and the first stop on your Chicago itinerary’s second day. Located in the central business district, you can stroll through and find hundreds of sculptures and public works of art.",
      activity_image: ''
    },

    {
      activity_id: 'chi-6578910342569',
      activity_name: 'Buckingham Fountain',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Among the world’s largest, Grant Park’s 3-level rococo fountain (1927) offers light & water shows.",
      activity_image: ''
    },

    {
      activity_id: 'chi-3450986732109',
      activity_name: 'Chicago Riverwalk',
      activity_type: "Sights & Landmarks",
      cost: 'FREE',
      activity_description: "Art on theMART's array of 34 digital projectors will fire back up on April 1, displaying the 30-minute program at 8:30 and 9pm every evening through April 30. Showtimes will shift to 9 and 9:30pm from May 1 through July 4. The show is best viewed from the section of the Chicago Riverwalk between Wells Street and Franklin Street, though there is a 100-person capacity limit and face coverings are required.",
      activity_image: ''
    },
    {
      activity_id: 'chi-8765490123870',
      activity_name: 'Lincoln Park Zoo',
      activity_type: 'Zoo',
      cost: 'FREE',
      activity_description: "Small, free zoo with lions, primates, reptiles, a children's area & an interactive farm exhibit.",
      activity_image: ''
    },
    {
      activity_id: 'chi-9023487654321',
      activity_name: 'Lincoln Park',
      activity_type: 'Botanical Garden',
      cost: 'FREE',
      activity_description: "Thousands of plants, from tropical species to seasonal flowers, in a glass-domed structure.",
      activity_image: ''
    },
    {
      activity_id: 'chi-7860543291805',
      activity_name: 'Oz Park',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: "Oz-themed playground/park with statues of the Tin Man, Scarecrow, Cowardly Lion & Dorothy.",
      activity_image: ''
    },
    {
      activity_id: 'chi-3901248765032',
      activity_name: 'Chicago History Museum',
      activity_type: 'Museums',
      cost: '',
      activity_description: "Photos, artifacts, newsreels & dioramas bring to life historical events, architecture & more.",
      activity_image: ''
    },
    {
      activity_id: 'chi-6432908175362',
      activity_name: 'Oak Street Beach',
      activity_type: 'Beach',
      cost: 'FREE',
      activity_description: "This sandy city beach on Lake Michigan allows swimming when lifeguards are present.",
      activity_image: ''
    },

    {
      activity_id: 'chi-5432109876345',
      activity_name: 'Newberry Library',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "In addition to perusing rare books and manuscripts at the Newberry Library, visitors can experience free exhibitions as well as public programs. Don’t miss this often overlooked gem!",
      activity_image: ''
    },

    {
      activity_id: 'chi-7084632109854',
      activity_name: 'City Gallery in the Historic Water Tower',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Chicago-focused gallery, specializing in photos, inside a 19th-century Gothic limestone landmark.",
      activity_image: ''
    },

    {
      activity_id: 'chi-3120765489032',
      activity_name: ' Uno Pizzeria & Grill ',
      activity_type: 'Food',
      cost: '',
      activity_description: "Cheese pizza, Chicago style deep dish italian cheese pizza with tomato sauce.Order a Numero Uno deep-dish pizza from Uno Pizzeria & Grill (a mainstay since since 1943), which is loaded with sausage, pepperoni, onions, peppers, mushrooms, and chunky tomato sauce, topped with mozzarella and romano.",
      activity_image: ''
    },
    {
      activity_id: 'chi-7240954826703',
      activity_name: 'IO Godfrey Rooftop Lounge',
      activity_type: 'Nightlife',
      cost: '',
      activity_description: "Take in stunning views of the Chicago skyline while sipping cocktails at the IO Godfrey Rooftop Lounge. Located in the River North neighborhood, this chic rooftop bar offers a stylish and modern atmosphere with comfortable seating and fire pits. The menu features a variety of cocktails, beer, wine, and small plates. The lounge also hosts weekly events such as DJ nights and live music performances. It's the perfect spot to enjoy a night out with friends or a romantic evening with a loved one.",
      activity_image: ''
    },
    {
      activity_id: 'chi-3114788004565',
      activity_name: 'The Green Mill Cocktail Lounge',
      activity_type: 'Nightlife',
      cost: '$15 cover charge',
      activity_description: "Experience the ambiance of a classic jazz club at The Green Mill Cocktail Lounge. This historic venue has been a staple of Chicago's nightlife scene since the 1920s and has hosted many famous musicians over the years. The interior is decorated with vintage decor and features a cozy atmosphere. Live jazz performances take place every night of the week, and the lounge offers a full bar with a variety of classic and modern cocktails. It's the perfect spot to unwind with some great music and drinks after a long day.",
      activity_image: ''
    },
    {
      activity_id: 'chi-7569193596049',
      activity_name: 'The Wooden Spoon',
      activity_type: 'Activity',
      cost: '',
      activity_description: "The Wooden Spoon is a popular cooking school in Chicago that offers a wide variety of hands-on cooking classes for all skill levels. From pasta-making and sushi-rolling to bread-baking and pastry decorating, there's a class for every interest. All classes are taught by experienced chefs and include all the necessary ingredients and equipment. After the class, participants can enjoy the delicious dishes they've created together. Classes fill up quickly, so be sure to book in advance to secure your spot.",
      activity_image: ''
    },
    {
      activity_id: 'chi-8110121822778',
      activity_name: 'City Winery Riverwalk',
      activity_type: 'Activity',
      cost: '$43 for adults, $23 for children',
      activity_description: " Indulge in delicious food and wine while enjoying stunning views of the Chicago River at City Winery's Riverwalk location. Sample a variety of wines made on-site and pair them with a selection of small plates, salads, and entrees. The menu features locally-sourced ingredients and changes seasonally. With indoor and outdoor seating available, City Winery Riverwalk is a perfect spot for a romantic date night or a casual gathering with friends.",
      activity_image: ''
    },
    {
      activity_id: 'chi -9783075584516',
      activity_name: 'Chicago Architecture Foundation River Cruise',
      activity_type: 'Activity',
      cost: '',
      activity_description: "Explore the beautiful architecture of Chicago while cruising down the Chicago River on this guided tour. Learn about the city's rich history and see some of its most iconic buildings up close, including the Willis Tower, the John Hancock Center, and the Wrigley Building. The tour lasts about 90 minutes and offers stunning views of the city's skyline. It's a great way to spend a leisurely afternoon or evening on the riverwalk.",
      activity_image: ''
    },


    // {
    //   activity_id: '',
    //   day_id: '',
    //   activity_name: '',
    //   // activity_location: '',
    //   activity_type: '',
    //   cost: 'FREE',
    //   activity_description: "",
    //   activity_image: ''
    // },


  ]);
};

    //   activity_name: 
    //   activity_type:
    //   cost:
    //   activity_description: 