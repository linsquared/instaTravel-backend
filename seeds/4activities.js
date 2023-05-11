exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activities').del();
  await knex('activities').insert([
    // chicago
    {
      activity_id: 'chi-6458321487291',
      activity_name: 'Millennium park',
      activity_type: 'Parks',
      cost: "FREE",
      activity_description: 'The Park’s unique, immense outdoor concert venue was designed by renowned architect Frank Gehry and spans much of the park. This is where you’ll find much of the activity!',
      activity_image: 'http://localhost:8080/images/activities/chicago/millen_park.jpg'
    },

    {
      activity_id: 'chi-3928671151243',
      activity_name: 'Cloud Gate',
      activity_type: 'Sights & Landmarks',
      cost: "FREE",
      activity_description: 'Cloud Gate is the most recognizable Chicago landmark. The seamless sculpture reflects the Chicago skyline. And when you walk beneath it, it reflects you as well from myriad angles. Shaped similarly to a bean, it’s affectionately referred to by locals as ‘the bean’.',
      activity_image: 'http://localhost:8080/images/activities/chicago/cloud_gate.jpg'
    },
    {
      activity_id: 'chi-2380569935861',
      activity_name: 'Crown Foundtain',
      activity_type: 'Sights & Landmarks',
      cost: "FREE",
      activity_description: 'Public sculpture with a pair of 50-ft. LED towers & a reflecting pool, by Jaume Plensa, a Catalan. There will also be a number of special events going on in the park from late spring to early fall, so do a little research before your visit to see what’s on. You can expect everything from prestigious concerts to fund food festivals to free yoga.',
      activity_image: 'http://localhost:8080/images/activities/chicago/fuente.jpg'
    },
    {
      activity_id: 'chi-5561876512399',
      activity_name: 'Art Institute of Chicago',
      activity_type: 'Museums',
      cost: "$25 for adult, free for children",
      activity_description: 'Beautifully set out, the Art Institute is a fantastic experience and a great start to your Chicago Itinerary. Its displays are always rotating and being added to, so if you’ve been here years ago, don’t let that stop you from going again.',
      activity_image: 'http://localhost:8080/images/activities/chicago/instituto_arte.jpg'
    },

    {
      activity_id: 'chi-7710238479654',
      activity_name: 'Willis Tower',
      activity_type: 'Observation Deck',
      cost: "$25",
      activity_description: 'For the most spectacular views, the best time to visit Skydeck Chicago is either just after opening or after 5 pm. If you’re planning on catching the sunset or taking in the twinkling nightscape of Chicago, you should plan on arriving 30-45 minutes before sunset.',
      activity_image: 'http://localhost:8080/images/activities/chicago/willis.jpg'
    },
    {
      activity_id: 'chi-4237659180987',
      activity_name: 'Union Station',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: 'An iconic building and a marvel of modern transportation for nearly a century, Chicago’s Union Station was originally designed by Daniel Burnham and completed by Graham, Anderson, Probst and White. A grand building worthy of the city’s status as a national railroad hub, it is a treasured part of Chicago history and a valued asset for Chicago’s future.',
      activity_image: 'http://localhost:8080/images/activities/chicago/union.jpg'
    },

    {
      activity_id: 'chi-9102381756089',
      activity_name: 'Lyric Opera of Chicago',
      activity_type: 'Concerts & Shows',
      cost: '',
      activity_description: "Is one of the leading opera companies in the United States. It was founded in Chicago in 1954, under the name 'Lyric Theatre of Chicago'.The company was re-organized by Fox in 1956 under its present name and, after her 1981 departure, it has continued to be of one of the major opera companies in the United States.",
      activity_image: 'http://localhost:8080/images/activities/chicago/opera.jpg'
    },
    {
      activity_id: 'chi-2309587061234',
      activity_name: 'Navy Pier',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Go for a ride on the iconic Centennial Wheel, with fantastic views over Chicago and Lake Michigan. Explore virtual reality or test your strength on the climbing wall. Navy Pier is also the primary departure point for many lake cruises and bus tours, so it's the perfect place to go if you have a little more time than expected!",
      activity_image: 'http://localhost:8080/images/activities/chicago/navy.jpg'
    },

    {
      activity_id: 'chi-4069837123561',
      activity_name: "Chicago Children's Museum",
      activity_type: 'Museums',
      cost: '',
      activity_description: "Family museum on Navy Pier with lots of hands-on-exhibits, including many for young kids.",
      activity_image: 'http://localhost:8080/images/activities/chicago/children_museum.jpg'
    },
    {
      activity_id: 'chi-6830421534790',
      activity_name: 'John Hancock Center',
      activity_type: 'Observation Deck',
      cost: 'FREE',
      activity_description: "Skyscraper observation deck offering panoramic city views from 1,000 feet up, plus food & drink. Perfect for sunset views!",
      activity_image: 'http://localhost:8080/images/activities/chicago/john_hancock.jpg'
    },

    {
      activity_id: 'chi-8712369851203',
      activity_name: '360 Chicago',
      activity_type: 'Observation Deck',
      cost: '',
      activity_description: "360 CHICAGO is the newly renovated observation deck of the iconic John Hancock Tower, located on Michigan Avenue. A visit here is both a great photo opportunity and a good chance to learn more about Chicago’s famous architecture. From your 94th floor vantage point (over 1000 feet in the air!), you’ll get unparalleled, 360-degree views of the Lake Michigan and the city below. ",
      activity_image: 'http://localhost:8080/images/activities/chicago/360.jpg'
    },

    {
      activity_id: 'chi-1354678902341',
      activity_name: 'Magnificent Mile',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "The Magnificent Mile is Chicago’s premier commercial district. The vibrant, bustling area is home to upscale shops, luxe fashion outlets, cool restaurants, and posh hotels. Landmarks include the historic Chicago Water Tower, the neo-Gothic Tribune Tower, the terracotta Wrigley Building skyscraper, and the 100-story John Hancock Center, which has a rooftop observation deck with fine dining and panoramic city views.",
      activity_image: 'http://localhost:8080/images/activities/chicago/mile.jpg'
    },
    {
      activity_id: 'chi-9804321765098',
      activity_name: 'Tribune Tower',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Neo-Gothic skyscraper influenced by Rouen Cathedral & decorated with rocks from world landmarks.",
      activity_image: 'http://localhost:8080/images/activities/chicago/tribune.jpg'
    },
    {
      activity_id: 'chi-2938465190783',
      activity_name: 'DuSable Bridge',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Long-standing drawbridge honoring a founder of Chicago & decorated with sculptures & plaques.",
      activity_image: 'http://localhost:8080/images/activities/chicago/bridge.jpg'
    },
    {
      activity_id: 'chi-7532910486709',
      activity_name: 'Chicago Cultural Center',
      activity_type: 'Shopping',
      cost: 'FREE',
      activity_description: "The whole building is covered in beautiful mosaics. With a giant glass dome and ornate staircases, it’s a wonderful place to go even when nothing else is going on. It’s a lovely place to relax and take in some beauty.",
      activity_image: 'http://localhost:8080/images/activities/chicago/cultral.jpg'
    },
    {
      activity_id: 'chi-1048732598602',
      activity_name: 'The Chicago Theatre',
      activity_type: 'Concerts & Shows',
      cost: '',
      activity_description: "French Baroque-style 3,600-seat auditorium showcasing national musical & comedy acts since 1921. The Chicago Theatre is a legendary venue in the heart of the Windy City.",
      activity_image: 'http://localhost:8080/images/activities/chicago/theater.jpg'
    },
    {
      activity_id: 'chi-4298710365498',
      activity_name: 'Untitled by Picasso',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Standing 50 feet tall and weighing over 160 tons, the Chicago Picasso in Daley Plaza is much more than just artwork to Chicagoans. The untitled Picasso sculpture that originally sparked controversy in the city has now become one of Chicago’s most famous sculptures and beloved icons.",
      activity_image: 'http://localhost:8080/images/activities/chicago/picasso.jpg'
    },
    {
      activity_id: 'chi-7321659087432',
      activity_name: 'Adler Planetarium',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: "Upon opening in 1930, became the first planetarium in the Western Hemisphere. The building is more than a museum; it’s a laboratory, a classroom, and a community exploring the universe together. Visitors flock to the Adler to experience interactive exhibits, live planetarium shows, hands-on educational programs, and world-class collections.",
      activity_image: 'http://localhost:8080/images/activities/chicago/adler.jpg'
    },
    {
      activity_id: 'chi-2304981765901',
      activity_name: 'Shedd Aquarium',
      activity_type: 'Aquariums',
      cost: '$40 GA, $30 for Children',
      activity_description: "What a win! We recommend reserving at least 2-3 hours for this attraction – there's so much to see and do. ",
      activity_image: 'http://localhost:8080/images/activities/chicago/aquarium.jpg'
    },

    {
      activity_id: 'chi-5167903248170',
      activity_name: 'Field Musem',
      activity_type: 'Museums',
      cost: '',
      activity_description: "The Field Museum has spent over 100 years curating and adding to its collections, so you know their selection and breadth of artifacts and objects will be impressive. Some of the highlights of their collection include SUE, the famous T-Rex (the most complete skeleton of her species), the notorious Tsavo Lions, an extensive collection of Ancient Egyptian artifacts, a beautiful selection of gemstones and minerals, and the fun “Underground Adventure” exhibit. We recommend reserving between 1-2 hours for this attraction. ",
      activity_image: 'http://localhost:8080/images/activities/chicago/field.jpg'
    },

    {
      activity_id: 'chi-3948601245809',
      activity_name: 'Agora',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "As you approach Agora in Grant Park, you'll be struck by the imposing scale and eerie beauty of the sculpture's metal figures, which appear to be walking purposefully and without heads.",
      activity_image: 'http://localhost:8080/images/activities/chicago/agora.jpg'
    },

    {
      activity_id: 'chi-1986734590876',
      activity_name: 'Grand Park',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "One of the biggest parks and foundtains in the world! Surrounding the Millenium Park and extending far beyond it is Grant Park. This giant public park is affectionately referred to as ‘Chicago’s front yard’, and the first stop on your Chicago itinerary’s second day. Located in the central business district, you can stroll through and find hundreds of sculptures and public works of art.",
      activity_image: 'http://localhost:8080/images/activities/chicago/grant.jpg'
    },

    {
      activity_id: 'chi-6578910342569',
      activity_name: 'Buckingham Fountain',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Among the world’s largest, Grant Park’s 3-level rococo fountain (1927) offers light & water shows.",
      activity_image: 'http://localhost:8080/images/activities/chicago/buckinham.jpg'
    },

    {
      activity_id: 'chi-3450986732109',
      activity_name: 'Chicago Riverwalk',
      activity_type: "Sights & Landmarks",
      cost: 'FREE',
      activity_description: "Art on theMART's array of 34 digital projectors will fire back up on April 1, displaying the 30-minute program at 8:30 and 9pm every evening through April 30. Showtimes will shift to 9 and 9:30pm from May 1 through July 4. The show is best viewed from the section of the Chicago Riverwalk between Wells Street and Franklin Street, though there is a 100-person capacity limit and face coverings are required.",
      activity_image: 'http://localhost:8080/images/activities/chicago/riverwalk.jpg'
    },
    {
      activity_id: 'chi-8765490123870',
      activity_name: 'Lincoln Park Zoo',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: "Small, free zoo with lions, primates, reptiles, a children's area & an interactive farm exhibit.",
      activity_image: 'http://localhost:8080/images/activities/chicago/lincoln.jpg'
    },
    {
      activity_id: 'chi-9023487654321',
      activity_name: 'Lincoln Park',
      activity_type: 'Botanical Garden',
      cost: 'FREE',
      activity_description: "Thousands of plants, from tropical species to seasonal flowers, in a glass-domed structure.",
      activity_image: 'http://localhost:8080/images/activities/chicago/lincoln.jpg'
    },
    {
      activity_id: 'chi-7860543291805',
      activity_name: 'Oz Park',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: "Oz-themed playground/park with statues of the Tin Man, Scarecrow, Cowardly Lion & Dorothy.",
      activity_image: 'http://localhost:8080/images/activities/chicago/oz.jpg'
    },
    {
      activity_id: 'chi-3901248765032',
      activity_name: 'Chicago History Museum',
      activity_type: 'Museums',
      cost: '',
      activity_description: "Photos, artifacts, newsreels & dioramas bring to life historical events, architecture & more.",
      activity_image: 'http://localhost:8080/images/activities/chicago/history.jpg'
    },
    {
      activity_id: 'chi-6432908175362',
      activity_name: 'Oak Street Beach',
      activity_type: 'Beach',
      cost: 'FREE',
      activity_description: "This sandy city beach on Lake Michigan allows swimming when lifeguards are present.",
      activity_image: 'http://localhost:8080/images/activities/chicago/lake.jpg'
    },

    {
      activity_id: 'chi-5432109876345',
      activity_name: 'Newberry Library',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "In addition to perusing rare books and manuscripts at the Newberry Library, visitors can experience free exhibitions as well as public programs. Don’t miss this often overlooked gem!",
      activity_image: 'http://localhost:8080/images/activities/chicago/library.jpg'
    },

    {
      activity_id: 'chi-7084632109854',
      activity_name: 'City Gallery in the Historic Water Tower',
      activity_type: 'Sights & Landmarks',
      cost: 'FREE',
      activity_description: "Chicago-focused gallery, specializing in photos, inside a 19th-century Gothic limestone landmark.",
      activity_image: 'http://localhost:8080/images/activities/chicago/waterTower.jpg'
    },

    {
      activity_id: 'chi-3120765489032',
      activity_name: ' Uno Pizzeria & Grill ',
      activity_type: 'Food',
      cost: '',
      activity_description: "Cheese pizza, Chicago style deep dish italian cheese pizza with tomato sauce.Order a Numero Uno deep-dish pizza from Uno Pizzeria & Grill (a mainstay since since 1943), which is loaded with sausage, pepperoni, onions, peppers, mushrooms, and chunky tomato sauce, topped with mozzarella and romano.",
      activity_image: 'http://localhost:8080/images/activities/chicago/deepdish.jpg'
    },
    {
      activity_id: 'chi-7240954826703',
      activity_name: 'IO Godfrey Rooftop Lounge',
      activity_type: 'Nightlife',
      cost: '',
      activity_description: "Take in stunning views of the Chicago skyline while sipping cocktails at the IO Godfrey Rooftop Lounge. Located in the River North neighborhood, this chic rooftop bar offers a stylish and modern atmosphere with comfortable seating and fire pits. The menu features a variety of cocktails, beer, wine, and small plates. The lounge also hosts weekly events such as DJ nights and live music performances. It's the perfect spot to enjoy a night out with friends or a romantic evening with a loved one.",
      activity_image: 'http://localhost:8080/images/activities/chicago/john_hancock.jpg'
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
      activity_type: 'Cultural activities',
      cost: '',
      activity_description: "The Wooden Spoon is a popular cooking school in Chicago that offers a wide variety of hands-on cooking classes for all skill levels. From pasta-making and sushi-rolling to bread-baking and pastry decorating, there's a class for every interest. All classes are taught by experienced chefs and include all the necessary ingredients and equipment. After the class, participants can enjoy the delicious dishes they've created together. Classes fill up quickly, so be sure to book in advance to secure your spot.",
      activity_image: ''
    },
    {
      activity_id: 'chi-8110121822778',
      activity_name: 'City Winery Riverwalk',
      activity_type: 'Cultural activities',
      cost: '$43 for adults, $23 for children',
      activity_description: " Indulge in delicious food and wine while enjoying stunning views of the Chicago River at City Winery's Riverwalk location. Sample a variety of wines made on-site and pair them with a selection of small plates, salads, and entrees. The menu features locally-sourced ingredients and changes seasonally. With indoor and outdoor seating available, City Winery Riverwalk is a perfect spot for a romantic date night or a casual gathering with friends.",
      activity_image: 'http://localhost:8080/images/activities/chicago/riverwalk.jpg'
    },
    {
      activity_id: 'chi-9783075584516',
      activity_name: 'Chicago Architecture Foundation River Cruise',
      activity_type: 'Cultural activities',
      cost: '',
      activity_description: "Explore the beautiful architecture of Chicago while cruising down the Chicago River on this guided tour. Learn about the city's rich history and see some of its most iconic buildings up close, including the Willis Tower, the John Hancock Center, and the Wrigley Building. The tour lasts about 90 minutes and offers stunning views of the city's skyline. It's a great way to spend a leisurely afternoon or evening on the riverwalk.",
      activity_image: 'http://localhost:8080/images/activities/chicago/riverwalk.jpg'
    },
    // tokyo, japan
    {
      activity_id: 'tok-2389746398756',
      activity_name: 'Yoyogi Park',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'Located in the heart of Tokyo, Yoyogi Park is one of the largest and most popular parks in the city. The park is a great place to relax, have a picnic, or just take a stroll and enjoy the beautiful scenery.',
      activity_image: ''
    },
    {
      activity_id: 'tok-3782469075413',
      activity_name: 'Sensoji Temple',
      activity_type: 'Religious sites',
      cost: 'FREE',
      activity_description: 'A famous Buddhist temple in Tokyo with a lively market street leading up to it.',
      activity_image: ''
    },

    {
      activity_id: 'tok-2390687208349',
      activity_name: 'Shibuya Crossing',
      activity_type: 'Scenic spot',
      cost: 'FREE',
      activity_description: 'One of the busiest intersections in the world, with pedestrians crossing in all directions at once.',
      activity_image: ''
    },

    {
      activity_id: 'tok-4795638921100',
      activity_name: 'Tsukiji Fish Market',
      activity_type: 'Markets',
      cost: 'FREE',
      activity_description: 'One of the largest fish markets in the world, where you can see the famous tuna auctions and sample fresh sushi.',
      activity_image: ''
    },

    {
      activity_id: 'tok-3572860532205',
      activity_name: 'Meiji Shrine',
      activity_type: 'Religious sites',
      cost: 'FREE',
      activity_description: 'A peaceful Shinto shrine located in a forested area of Tokyo, dedicated to Emperor Meiji and Empress Shoken.',
      activity_image: ''
    },

    {
      activity_id: 'tok-9128340683610',
      activity_name: 'Harajuku',
      activity_type: 'Shopping districts',
      cost: 'FREE',
      activity_description: 'A trendy area known for its street fashion, quirky shops, and colorful crepes.',
      activity_image: ''
    },

    {
      activity_id: 'tok-8736459087632',
      activity_name: 'Odaiba',
      activity_type: 'Islands',
      cost: 'FREE',
      activity_description: 'A man-made island in Tokyo Bay with many attractions, including a giant Gundam statue and the TeamLab Borderless digital art museum.',
      activity_image: ''
    },

    {
      activity_id: 'tok-4563218739461',
      activity_name: 'Akihabara',
      activity_type: 'Shopping districts',
      cost: 'FREE',
      activity_description: 'A district known for its electronics shops, anime merchandise, and maid cafes.',
      activity_image: ''
    },

    {
      activity_id: 'tok-5638921729014',
      activity_name: 'Tokyo Tower',
      activity_type: 'Observation decks',
      cost: '$15',
      activity_description: 'A 333-meter tall tower with two observation decks offering views of Tokyo.',
      activity_image: ''
    },

    {
      activity_id: 'tok-3749281682903',
      activity_name: 'Ueno Park',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'A large park with many museums and attractions, including the Tokyo National Museum and the Ueno Zoo.',
      activity_image: ''
    },

    {
      activity_id: 'tok-9018742306842',
      activity_name: 'Ginza',
      activity_type: 'Shopping',
      cost: 'FREE',
      activity_description: 'An upscale shopping district with many department stores and luxury brands.',
      activity_image: ''
    },


    {
      activity_id: 'tok-7534215678132',
      activity_name: 'Tokyo Tower',
      activity_type: 'Landmarks',
      cost: '¥1,200',
      activity_description: 'Enjoy a panoramic view of Tokyo from the top of this iconic tower.',
      activity_image: 'å'
    },

    {
      activity_id: 'tok-8347521946325',
      activity_name: 'Asakusa Shrine',
      activity_type: 'Religious sites',
      cost: 'FREE',
      activity_description: "Visit one of Tokyo's most important and oldest Shinto shrines.",
      activity_image: ''
    },

    {
      activity_id: 'tok-9864352347554',
      activity_name: 'Tokyo National Museum',
      activity_type: 'Museums',
      cost: '¥620',
      activity_description: 'Explore Japanese art and culture at this fascinating museum.',
      activity_image: ''
    },

    {
      activity_id: 'tok-2874562345678',
      activity_name: 'Harajuku',
      activity_type: 'Shopping',
      cost: 'Varies',
      activity_description: 'Shop for unique and trendy fashion in this famous neighborhood.',
      activity_image: ''
    },

    {
      activity_id: 'tok-4534676534756',
      activity_name: 'Tsukiji Fish Market',
      activity_type: 'Markets',
      cost: 'FREE',
      activity_description: "Experience the hustle and bustle of Japan's largest seafood market.",
      activity_image: ''
    },

    {
      activity_id: 'tok-6734982356123',
      activity_name: 'Shibuya Crossing',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Watch the famous pedestrian scramble at the busiest intersection in the world.',
      activity_image: ''
    },

    {
      activity_id: 'tok-7896542345789',
      activity_name: 'Meiji Shrine',
      activity_type: 'Religious sites',
      cost: 'FREE',
      activity_description: "Visit a serene Shinto shrine in the heart of Tokyo's bustling cityscape.",
      activity_image: ''
    },

    {
      activity_id: 'tok-8356123456765',
      activity_name: 'Tokyo DisneySea',
      activity_type: 'Theme parks',
      cost: '¥8,200',
      activity_description: 'Experience the magic of Disney in this unique nautical-themed park.',
      activity_image: ''
    },

    {
      activity_id: 'tok-7865432345654',
      activity_name: 'Yoyogi Park',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'Relax and enjoy nature in the heart of Tokyo.',
      activity_image: ''
    },

    {
      activity_id: 'tok-8765432123546',
      activity_name: 'Robot Restaurant',
      activity_type: 'Shows and performances',
      cost: '¥8,000',
      activity_description: 'Watch an outrageous and entertaining show featuring robots, dancers, and lasers.',
      activity_image: '',

    },

    {
      activity_id: 'tok-6843205792',
      activity_name: 'Tokyo Metropolitan Government Building',
      activity_type: 'Landmarks & Observatories',
      cost: 'FREE',
      activity_description: 'The twin towers of the Tokyo Metropolitan Government Building offer fantastic views of the city. You can see all the way to Mount Fuji on clear days!',
      activity_image: ''
    },

    {
      activity_id: 'tok-4632785402',
      activity_name: 'Imperial Palace East Gardens',
      activity_type: 'Gardens',
      cost: 'FREE',
      activity_description: 'The East Gardens of the Imperial Palace are a serene oasis in the middle of bustling Tokyo. Stroll through the gardens and enjoy the beautiful scenery.',
      activity_image: ''
    },

    {
      activity_id: 'tok-5392816598',
      activity_name: 'Sensoji Temple',
      activity_type: 'Temples & Shrines',
      cost: 'FREE',
      activity_description: 'Sensoji is Tokyo’s oldest temple, dating back to the 7th century. Visit the temple grounds and explore the Nakamise shopping street nearby.',
      activity_image: ''
    },

    {
      activity_id: 'tok-7586942163234',
      activity_name: 'Tokyo Disneyland',
      activity_type: 'Amusement Parks',
      cost: '¥8,200 ($74 USD)',
      activity_description: 'Tokyo Disneyland is one of the most popular theme parks in the world, with attractions and shows for all ages. Get ready for a day of fun and excitement!',
      activity_image: ''
    },


    {
      activity_id: "tok-7843097629402",
      activity_name: "Tokyo National Museum",
      activity_type: "Museums",
      cost: "$15",
      activity_description: "Japan's oldest and largest museum, with a vast collection of over 110,000 objects showcasing the country's rich cultural heritage.",
      activity_image: ""
    },
    {
      activity_id: "tok-9847230918745",
      activity_name: "Tokyo Skytree",
      activity_type: "Landmarks",
      cost: "$25",
      activity_description: "The tallest tower in the world, offering breathtaking views of Tokyo from its observation decks.",
      activity_image: ""
    },
    {
      activity_id: "tok-2937465192387",
      activity_name: "Harajuku Fashion Street",
      activity_type: "Shopping",
      cost: "Varies",
      activity_description: "A popular shopping district known for its unique and trendy fashion boutiques, cafes, and street food.",
      activity_image: ""
    },
    {
      activity_id: "tok-1987263045832",
      activity_name: "Tsukiji Fish Market",
      activity_type: "Food & Drink",
      cost: "$",
      activity_description: "The world's largest fish market, where you can witness the famous tuna auction and enjoy fresh seafood at its many eateries.",
      activity_image: ""
    },
    {
      activity_id: "tok-5749305849201",
      activity_name: "Shinjuku Gyoen National Garden",
      activity_type: "Parks",
      cost: "$2",
      activity_description: "A spacious and tranquil oasis in the heart of Tokyo, featuring a beautiful Japanese garden, greenhouse, and cherry blossom trees.",
      activity_image: ""
    },
    {
      activity_id: 'tok-7586942163235',
      activity_name: 'Tsukiji Fish Market',
      activity_type: 'Markets',
      cost: 'FREE',
      activity_description: 'Visit the world’s largest fish market, where you can find an incredible variety of seafood and watch the famous tuna auction!',
      activity_image: ''
    },

    {
      activity_id: 'tok-7586942163236',
      activity_name: 'Tokyo Skytree',
      activity_type: 'Observation Decks',
      cost: '¥2,060 ($19 USD)',
      activity_description: 'Take in stunning views of Tokyo from the tallest tower in the world!',
      activity_image: ''
    },

    {
      activity_id: 'tok-7586942163237',
      activity_name: 'Meiji Shrine',
      activity_type: 'Shrines',
      cost: 'FREE',
      activity_description: 'Explore the peaceful oasis of Meiji Shrine, dedicated to the spirits of Emperor Meiji and Empress Shoken!',
      activity_image: ''
    },

    {
      activity_id: 'tok-7586942163238',
      activity_name: 'Tokyo Tower',
      activity_type: 'Observation Decks',
      cost: '¥1,200 ($11 USD)',
      activity_description: 'Admire the iconic Tokyo Tower, offering breathtaking views of the city!',
      activity_image: ''
    },

    {
      activity_id: 'tok-7586942163239',
      activity_name: 'Harajuku Takeshita Street',
      activity_type: 'Shopping',
      cost: 'FREE',
      activity_description: 'Stroll down the vibrant Takeshita Street, known for its trendy fashion boutiques and tasty snacks!',
      activity_image: ''
    },

    {
      activity_id: 'tok-7586942163240',
      activity_name: 'National Museum of Nature and Science',
      activity_type: 'Museums',
      cost: '¥620 ($6 USD)',
      activity_description: 'Discover the wonders of science and nature at this fascinating museum!',
      activity_image: ''
    },

    {
      activity_id: 'tok-7586942163241',
      activity_name: 'Odaiba',
      activity_type: 'Entertainment',
      cost: 'FREE',
      activity_description: 'Enjoy a day of fun and entertainment at Odaiba, featuring shopping malls, theme parks, and beautiful views of Tokyo Bay!',
      activity_image: ''
    },
    // london uk
    {
      activity_id: "lon-4582693121549",
      activity_name: "The British Museum",
      activity_type: "Museums",
      cost: "Free",
      activity_description: "Explore over two million years of human history, art and culture at The British Museum. The museum's collection spans over 8 million objects and includes the Rosetta Stone and the Parthenon sculptures.",
      activity_image: ""
    },
    {
      activity_id: "lon-7830214731234",
      activity_name: "The London Eye",
      activity_type: "Attractions",
      cost: "£27 ($37 USD)",
      activity_description: "The London Eye offers breathtaking views of the city skyline from 135 meters above the River Thames. Take a 30-minute ride in one of the 32 glass capsules and see London from a different perspective.",
      activity_image: ""
    }, {
      activity_id: 'lon-1234567890123',
      activity_name: 'Tower of London',
      activity_type: 'Historic Sites',
      cost: '£25.00',
      activity_description: 'Explore the history of the Tower of London, including the famous Crown Jewels, with a guided tour of this iconic castle.',
      activity_image: ''
    },
    {
      activity_id: 'lon-2345678901234',
      activity_name: 'British Museum',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'Discover the world-famous collection of art and artifacts at the British Museum, including the Rosetta Stone and the Parthenon sculptures.',
      activity_image: ''
    },
    {
      activity_id: 'lon-3456789012345',
      activity_name: 'Westminster Abbey',
      activity_type: 'Historic Sites',
      cost: '£23.00',
      activity_description: 'Visit the site of coronations and royal weddings at Westminster Abbey, a stunning example of Gothic architecture.',
      activity_image: ''
    },
    {
      activity_id: 'lon-4567890123456',
      activity_name: 'London Eye',
      activity_type: 'Landmarks',
      cost: '£30.00',
      activity_description: 'Take in breathtaking views of the city from the top of the London Eye, one of the world\'s largest observation wheels.',
      activity_image: ''
    },
    {
      activity_id: 'lon-5678901234567',
      activity_name: 'The Shard',
      activity_type: 'Landmarks',
      cost: '£35.00',
      activity_description: 'Rise above the city at the Shard, the tallest building in the UK, and enjoy panoramic views of London from the observation deck.',
      activity_image: ''
    },
    {
      activity_id: 'lon-6789012345678',
      activity_name: 'Buckingham Palace',
      activity_type: 'Historic Sites',
      cost: '£26.50',
      activity_description: 'See the Changing of the Guard and tour the opulent State Rooms at Buckingham Palace, the official residence of the British monarch.',
      activity_image: ''
    },
    {
      activity_id: 'lon-7890123456789',
      activity_name: 'Tate Modern',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'Experience contemporary art at the Tate Modern, housed in a former power station on the banks of the Thames.',
      activity_image: ''
    },
    {
      activity_id: 'lon-8901234567890',
      activity_name: 'St. Paul\'s Cathedral',
      activity_type: 'Historic Sites',
      cost: '£20.00',
      activity_description: 'Climb to the top of the dome and explore the stunning interior of St. Paul\'s Cathedral, one of London\'s most iconic landmarks.',
      activity_image: ''
    },
    {
      activity_id: 'lon-9012345678901',
      activity_name: 'Hyde Park',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'Relax in the beautiful surroundings of Hyde Park, one of London\'s largest and most popular parks, featuring gardens, lakes, and outdoor activities.',
      activity_image: ''
    },
    {
      activity_id: 'lon-0123456789012',
      activity_name: 'The National Gallery',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'View masterpieces of Western art at the National Gallery, including works by Van Gogh.',
      activity_image: ''

    },

    {
      activity_id: 'lnd-3265847169842',
      activity_name: 'The British Museum',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'The British Museum is one of the oldest museums in the world, with a collection that spans over two million years of human history. Explore the treasures of the ancient world!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-4629857349812',
      activity_name: 'St. Paul’s Cathedral',
      activity_type: 'Religious Sites',
      cost: '£20 ($28 USD)',
      activity_description: 'St. Paul’s Cathedral is one of London’s most iconic landmarks, with a history that dates back over 1,400 years. Climb to the top for stunning views of the city!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-8736549871265',
      activity_name: 'Westminster Abbey',
      activity_type: 'Religious Sites',
      cost: '£24 ($33 USD)',
      activity_description: 'Westminster Abbey is a UNESCO World Heritage Site and the final resting place of many famous Britons. Discover the history of this iconic building!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-1847563298745',
      activity_name: 'The Tower of London',
      activity_type: 'Historic Sites',
      cost: '£28 ($39 USD)',
      activity_description: 'The Tower of London is one of the city’s most famous landmarks, with a history that spans nearly 1,000 years. Discover the stories of this iconic castle!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-2354687109865',
      activity_name: 'Buckingham Palace',
      activity_type: 'Historic Sites',
      cost: '£28 ($39 USD)',
      activity_description: 'Buckingham Palace is the official residence of the British monarch and a symbol of the British monarchy. Take a tour of this iconic palace!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-5874902384759',
      activity_name: 'The London Eye',
      activity_type: 'Observation Decks & Towers',
      cost: '£28 ($39 USD)',
      activity_description: 'The London Eye is one of the city’s most iconic attractions, with stunning views of the River Thames and the city skyline. See London from above!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-7890234987215',
      activity_name: 'Madame Tussauds London',
      activity_type: 'Museums',
      cost: '£35 ($49 USD)',
      activity_description: 'Madame Tussauds London is one of the city’s most popular attractions, with lifelike wax figures of famous people from around the world. Meet your favorite celebrities!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-9247103984723',
      activity_name: 'The Tate Modern',
      activity_type: 'Art Museums',
      cost: 'FREE',
      activity_description: 'The Tate Modern is one of the world’s most famous modern art museums, with works by some of the most famous artists of the 20th and 21st centuries. Discover the cutting edge of art!',
      activity_image: ''
    },
    {
      activity_id: 'lnd-5729471236578',
      activity_name: 'The National Gallery',
      activity_type: 'Art Museums',
      cost: 'FREE',
      activity_description: "check it out, tour around",
      activity_image: ''
    },

    // paris

    {
      activity_id: 'par-012345678901',
      activity_name: 'The Louvre',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'See the Mona Lisa and other famous works of art at the world-renowned Louvre Museum.',
      activity_image: ''
    },
    {
      activity_id: 'par-123456789012',
      activity_name: 'Eiffel Tower',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Take in the panoramic views of Paris from the top of the iconic Eiffel Tower.',
      activity_image: ''
    },
    {
      activity_id: 'par-234567890123',
      activity_name: 'Notre-Dame Cathedral',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Visit the historic Notre-Dame Cathedral and marvel at its stunning Gothic architecture.',
      activity_image: ''
    },
    {
      activity_id: 'par-345678901234',
      activity_name: 'Sainte-Chapelle',
      activity_type: 'Landmarks',
      cost: '',
      activity_description: 'Admire the beautiful stained glass windows of Sainte-Chapelle, a medieval Gothic chapel.',
      activity_image: ''
    },
    {
      activity_id: 'par-456789012345',
      activity_name: "Musée d'Orsay",
      activity_type: 'Museums',
      cost: '',
      activity_description: "Discover the Impressionist and Post-Impressionist art at the Musée d'Orsay",
      activity_image: ''
    },
    {
      activity_id: 'par-567890123456',
      activity_name: 'Château de Versailles',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: "Visit the opulent palace of Versailles, a symbol of the French monarchy's power and wealth.",
      activity_image: ''
    },
    {
      activity_id: 'par-678901234567',
      activity_name: 'Montmartre',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Explore the charming neighborhood of Montmartre, famous for its bohemian atmosphere and artists.',
      activity_image: ''
    },
    {
      activity_id: 'par-789012345678',
      activity_name: 'Arc de Triomphe',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Climb to the top of the Arc de Triomphe for breathtaking views of the Champs-Élysées.',
      activity_image: ''
    },
    {
      activity_id: 'par-890123456789',
      activity_name: 'Centre Pompidou',
      activity_type: 'Museums',
      cost: '',
      activity_description: 'Experience contemporary art and design at the Centre Pompidou, a modern cultural center in the heart of Paris.',
      activity_image: ''
    },
    {
      activity_id: 'par-901234567890',
      activity_name: 'Musée Rodin',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'See the works of the famous sculptor Auguste Rodin at the Musée Rodin, housed in a beautiful mansion.',
      activity_image: ''
    },

    {
      activity_id: 'par-098765432112',
      activity_name: 'Sainte-Chapelle',
      activity_type: 'Historic Sites',
      cost: '€10',
      activity_description: 'Admire the stained glass windows and Gothic architecture of this 13th-century royal chapel.',
      activity_image: ''
    },
    {
      activity_id: 'par-765432109876',
      activity_name: 'Palace of Versailles',
      activity_type: 'Palaces',
      cost: '€20',
      activity_description: 'Explore the opulent palace and gardens of Versailles, former home of the French monarchy.',
      activity_image: ''
    },
    {
      activity_id: 'par-234567890128',
      activity_name: 'Catacombs of Paris',
      activity_type: 'Museums',
      cost: '€13',
      activity_description: 'Descend into the eerie tunnels beneath Paris and discover the bone-filled catacombs.',
      activity_image: ''
    },
    {
      activity_id: 'par-456789012347',
      activity_name: 'Eiffel Tower',
      activity_type: 'Landmarks',
      cost: '€25',
      activity_description: 'Marvel at the iconic Eiffel Tower and enjoy panoramic views of Paris from the top.',
      activity_image: ''
    },
    {
      activity_id: 'par-543210987654',
      activity_name: 'Notre-Dame Cathedral',
      activity_type: 'Historic Sites',
      cost: 'FREE',
      activity_description: 'Visit the famous Gothic cathedral, which is currently undergoing reconstruction after the 2019 fire.',
      activity_image: ''
    },
    {
      activity_id: 'par-876543210987',
      activity_name: 'Musée d\'Orsay',
      activity_type: 'Museums',
      cost: '€14',
      activity_description: 'See an impressive collection of Impressionist and Post-Impressionist art in a converted railway station.',
      activity_image: ''
    },
    {
      activity_id: 'par-321098765432',
      activity_name: 'Arc de Triomphe',
      activity_type: 'Landmarks',
      cost: '€12',
      activity_description: 'Climb to the top of the triumphal arch for views of the Champs-Élysées and beyond.',
      activity_image: ''
    },
    {
      activity_id: 'par-789012345677',
      activity_name: 'Montmartre',
      activity_type: 'Neighborhoods',
      cost: 'FREE',
      activity_description: 'Explore the charming hilltop neighborhood of Montmartre, home to artists and writers for centuries.',
      activity_image: ''
    },
    {
      activity_id: 'par-210987654321',
      activity_name: 'Centre Pompidou',
      activity_type: 'Museums',
      cost: '€16',
      activity_description: 'Experience modern and contemporary art at the Centre Pompidou, known for its iconic exterior.',
      activity_image: ''
    },
    {
      activity_id: 'par-678901234561',
      activity_name: 'Île de la Cité',
      activity_type: 'Islands',
      cost: 'FREE',
      activity_description: 'Visit the historic island in the middle of the Seine, home to Notre-Dame and the Conciergerie.',
      activity_image: ''
    },
    {
      activity_id: 'par-0987654321011',
      activity_name: 'Palais Garnier',
      activity_type: 'Landmarks',
      cost: '€14',
      activity_description: 'Discover the opulent architecture of the Paris Opera house, home to the Phantom of the Opera.',
      activity_image: ''
    },
    {
      activity_id: 'par-1234509876543',
      activity_name: 'Parc des Buttes-Chaumont',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'Escape the city and enjoy a scenic stroll through this park with a picturesque lake and waterfalls.',
      activity_image: ''
    },
    {
      activity_id: 'par-5432109876543',
      activity_name: 'Sainte-Chapelle',
      activity_type: 'Religious Sites',
      cost: '€11',
      activity_description: 'Marvel at the stunning stained glass windows of this medieval Gothic chapel.',
      activity_image: ''
    },
    {
      activity_id: 'par-0987612345678',
      activity_name: 'Le Marais',
      activity_type: 'Neighborhoods',
      cost: 'FREE',
      activity_description: 'Wander through the charming streets of this historic neighborhood, known for its trendy boutiques and galleries.',
      activity_image: ''
    },
    {
      activity_id: 'par-0123456789098',
      activity_name: 'Père Lachaise Cemetery',
      activity_type: 'Cemeteries',
      cost: 'FREE',
      activity_description: 'Pay your respects to famous figures buried at this sprawling cemetery, including Jim Morrison and Oscar Wilde.',
      activity_image: ''
    },
    {
      activity_id: 'par-8901234567801',
      activity_name: 'Rodin Museum',
      activity_type: 'Museums',
      cost: '€12',
      activity_description: 'Admire the works of the renowned sculptor Auguste Rodin, including "The Thinker," in this beautiful museum and garden.',
      activity_image: ''
    },
    {
      activity_id: 'par-2345678901234',
      activity_name: 'Moulin Rouge',
      activity_type: 'Nightlife',
      cost: '€95',
      activity_description: 'Experience the glitz and glamour of the world-famous cabaret show with a dazzling performance and champagne.',
      activity_image: ''
    },
    // nyc
    {
      activity_id: 'nyc-012345678912',
      activity_name: 'Statue of Liberty',
      activity_type: 'Landmarks',
      cost: '$25',
      activity_description: 'Visit the iconic Statue of Liberty and enjoy amazing views of the New York skyline.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-123456789012',
      activity_name: 'The Metropolitan Museum of Art',
      activity_type: 'Museums',
      cost: 'Pay what you wish',
      activity_description: 'Experience one of the world’s largest and finest art museums, with an unparalleled collection spanning 5,000 years of world culture.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-234567890123',
      activity_name: 'Central Park',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'Explore the beautiful Central Park, an oasis in the middle of Manhattan with 843 acres of green space and various activities.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-345678901234',
      activity_name: 'Empire State Building',
      activity_type: 'Landmarks',
      cost: '$38',
      activity_description: 'Experience the breathtaking views of New York City from the top of the iconic Empire State Building.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-456789012345',
      activity_name: 'Broadway Show',
      activity_type: 'Entertainment',
      cost: '$150',
      activity_description: 'Watch a spectacular Broadway show and enjoy the best of New York City’s theater scene.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-567890123456',
      activity_name: '9/11 Memorial and Museum',
      activity_type: 'Museums',
      cost: '$28',
      activity_description: 'Pay tribute to the victims of the 9/11 attacks and learn about the history and aftermath of the tragic event at the 9/11 Memorial and Museum.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-678901234567',
      activity_name: 'Brooklyn Bridge',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Walk across the historic Brooklyn Bridge and enjoy amazing views of the New York skyline and the East River.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-789012345678',
      activity_name: 'American Museum of Natural History',
      activity_type: 'Museums',
      cost: 'Pay what you wish',
      activity_description: 'Explore the wonders of the natural world and the universe at the American Museum of Natural History, one of the largest and most celebrated museums of its kind in the world.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-890123456789',
      activity_name: 'High Line',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'Stroll along the beautiful High Line, a unique elevated park built on a former railroad track on Manhattan’s West Side.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-9012345678908',
      activity_name: 'Times Square',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Experience the vibrant energy of Times Square, the bustling commercial and entertainment hub of New York City.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-0987654321122',
      activity_name: 'Central Park Zoo',
      activity_type: 'Zoos & Aquariums',
      cost: '$13.95 - $19.95',
      activity_description: 'Visit the Central Park Zoo to see penguins, sea lions, snow leopards, and other amazing animals!',
      activity_image: ''
    },
    {
      activity_id: 'nyc-1122334455667',
      activity_name: 'One World Observatory',
      activity_type: 'Observatories',
      cost: '$39',
      activity_description: 'Take in stunning views of New York City from the One World Observatory, located on the 100th floor of One World Trade Center.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-2233445566778',
      activity_name: 'Brooklyn Bridge',
      activity_type: 'Bridges',
      cost: 'FREE',
      activity_description: 'Walk across the Brooklyn Bridge, one of the most iconic landmarks in New York City, and enjoy breathtaking views of the city skyline.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-3344556677889',
      activity_name: 'The Frick Collection',
      activity_type: 'Art Museums',
      cost: '$22',
      activity_description: 'Explore the Frick Collection, a world-renowned museum that houses a vast collection of European art from the Renaissance through the early 19th century.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-4455667788990',
      activity_name: 'The High Line',
      activity_type: 'Parks',
      cost: 'FREE',
      activity_description: 'Stroll along the High Line, a beautiful elevated park that runs along the west side of Manhattan and offers stunning views of the city.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-5566778899001',
      activity_name: 'Apollo Theater',
      activity_type: 'Theaters',
      cost: '$25 - $85',
      activity_description: 'Experience the magic of the Apollo Theater, a historic venue in Harlem that has hosted some of the biggest names in music and comedy.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-6677889900112',
      activity_name: 'Ellis Island',
      activity_type: 'Historic Sites',
      cost: '$15',
      activity_description: 'Visit Ellis Island, the historic gateway to America, and learn about the millions of immigrants who passed through its doors.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-7788990011223',
      activity_name: 'Chelsea Market',
      activity_type: 'Markets',
      cost: 'Varies',
      activity_description: 'Explore the vibrant Chelsea Market, a food hall and shopping destination that features a wide variety of vendors and shops.',
      activity_image: ''
    },
    {
      activity_id: 'nyc-8899001122334',
      activity_name: 'American Museum of Natural History',
      activity_type: 'Science Museums',
      cost: '$23 - $33',
      activity_description: 'Discover the wonders of the natural world at the American Museum of Natural History, one of the largest and most celebrated museums in the world.',
      activity_image: ''
    },

    // rome
    {
      activity_id: 'rom-0123456789012',
      activity_name: 'Colosseum',
      activity_type: 'Historical Landmarks',
      cost: 'FREE',
      activity_description: 'Visit one of the most famous and iconic landmarks in Rome, the Colosseum, which was used for gladiatorial contests and public spectacles.',
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789013',
      activity_name: 'Vatican Museums',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'Explore one of the largest and most important art collections in the world at the Vatican Museums.',
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789014',
      activity_name: 'Trevi Fountain',
      activity_type: 'Landmarks & Historical Buildings',
      cost: 'FREE',
      activity_description: 'Toss a coin into the Trevi Fountain and make a wish in this iconic and beautiful landmark.',
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789015',
      activity_name: 'Pantheon',
      activity_type: 'Historical Landmarks',
      cost: 'FREE',
      activity_description: 'Visit the ancient Roman temple turned Christian church, the Pantheon, which features a stunning dome and impressive architecture.',
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789016',
      activity_name: 'Spanish Steps',
      activity_type: 'Landmarks & Historical Buildings',
      cost: 'FREE',
      activity_description: "Climb the Spanish Steps for a beautiful view of the city and the chance to experience one of Rome's most famous landmarks.",
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789017',
      activity_name: 'Roman Forum',
      activity_type: 'Historical Landmarks',
      cost: 'FREE',
      activity_description: 'Discover the ancient political, social, and religious center of Rome at the Roman Forum, which features ruins and ancient architecture.',
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789020',
      activity_name: 'Borghese Gallery and Gardens',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: "Experience one of Rome's most beautiful museums, the Borghese Gallery and Gardens, which features a stunning collection of art and sculptures.",
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789021',
      activity_name: 'Appia Antica',
      activity_type: 'Historical Landmarks',
      cost: 'FREE',
      activity_description: 'Take a walk along the ancient Roman road, Appia Antica, which features historic landmarks and beautiful views.',
      activity_image: ''
    },
    {
      activity_id: 'rom-0123456789018',
      activity_name: 'Piazza Navona',
      activity_type: 'Sightseeing',
      cost: 'FREE',
      activity_description: 'Visit this beautiful square to see the Fountain of the Four Rivers, designed by Bernini.',
      activity_image: ''
    },

    {
      activity_id: 'rom-0123456789019',
      activity_name: "Castel Sant'Angelo",
      activity_type: 'Sightseeing',
      cost: 'FREE',
      activity_description: 'Explore the stunning fortress that was once a mausoleum for the Roman emperor Hadrian.',
      activity_image: ''
    },

    {
      activity_id: 'rom-0123456789023',
      activity_name: 'Trevi Fountain',
      activity_type: 'Sightseeing',
      cost: 'FREE',
      activity_description: 'Make a wish and toss a coin into this iconic fountain, known as one of the most beautiful fountains in the world.',
      activity_image: ''
    },

    {
      activity_id: 'rom-0123456789022',
      activity_name: 'Vatican Museums',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'Discover one of the most important art collections in the world, housed in the Vatican City.',
      activity_image: ''
    },

    // milan
    {
      activity_id: 'mil-012345678901',
      activity_name: 'Duomo di Milano',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Admire the impressive gothic cathedral, one of the largest in the world.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678902',
      activity_name: 'Sforza Castle',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'Explore the historic fortress and its numerous museums, including works by Michelangelo.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678903',
      activity_name: 'Galleria Vittorio Emanuele II',
      activity_type: 'Shopping',
      cost: '',
      activity_description: 'Shop in the historic and elegant arcade, filled with luxury boutiques and restaurants.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678904',
      activity_name: 'Navigli Canals',
      activity_type: 'Sightseeing',
      cost: 'FREE',
      activity_description: 'Take a stroll along the picturesque canals, lined with bars and restaurants.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678905',
      activity_name: 'Pinacoteca di Brera',
      activity_type: 'Museums',
      cost: 'FREE',
      activity_description: 'Discover the beautiful art collections of Italian and European masters, including Raphael and Caravaggio.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678906',
      activity_name: 'Leonardo da Vinci Museum',
      activity_type: 'Museums',
      cost: '',
      activity_description: 'Explore the fascinating museum dedicated to the works and inventions of the famous Italian artist and inventor.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678907',
      activity_name: 'San Siro Stadium',
      activity_type: 'Sports',
      cost: '',
      activity_description: 'Take a tour of the iconic stadium and learn about the history of Italian football.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678908',
      activity_name: 'Basilica di Sant\'Ambrogio',
      activity_type: 'Landmarks',
      cost: 'FREE',
      activity_description: 'Visit the impressive Romanesque church, one of the oldest in Milan.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678909',
      activity_name: 'Teatro alla Scala',
      activity_type: 'Arts',
      cost: '',
      activity_description: 'Attend a performance at one of the world\'s most famous opera houses.',
      activity_image: ''
    },
    {
      activity_id: 'mil-012345678910',
      activity_name: 'Bosco Verticale',
      activity_type: 'Architecture',
      cost: 'FREE',
      activity_description: 'See the innovative and environmentally-friendly vertical forest, with over 900 trees and 20,000 plants.',
      activity_image: ''
    },

    // venice
    {
      activity_id: 'ven-012345678912',
      activity_name: 'St. Mark’s Basilica',
      activity_type: 'Religious Sites',
      cost: '€3 for admission',
      activity_description: 'Admire the golden mosaics and intricate artwork inside this iconic cathedral.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678913',
      activity_name: 'Rialto Market',
      activity_type: 'Markets',
      cost: 'Free',
      activity_description: 'Experience the hustle and bustle of Venice’s famous fish and produce market.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678914',
      activity_name: 'Grand Canal',
      activity_type: 'Boat Tours',
      cost: '€7 for a public water bus',
      activity_description: 'Take a water bus down the main canal of Venice and see the city from a unique perspective.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678915',
      activity_name: 'Doge’s Palace',
      activity_type: 'Historic Sites',
      cost: '€20 ',
      activity_description: 'Explore the opulent rooms and chambers of the former home of Venice’s leaders.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678916',
      activity_name: 'Gondola Ride',
      activity_type: 'Boat Tours',
      cost: '€80-€100 per ride',
      activity_description: 'Enjoy a romantic ride through Venice’s canals in a traditional gondola.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678917',
      activity_name: 'Peggy Guggenheim Collection',
      activity_type: 'Art Museums',
      cost: '€16 for admission',
      activity_description: 'View modern art masterpieces from the likes of Picasso and Pollock at this iconic museum.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678918',
      activity_name: 'Basilica di Santa Maria della Salute',
      activity_type: 'Religious Sites',
      cost: 'FREE',
      activity_description: 'Climb the stairs of this magnificent church for breathtaking views of Venice’s skyline.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678919',
      activity_name: 'Bridge of Sighs',
      activity_type: 'Historic Sites',
      cost: 'Free ',
      activity_description: 'Marvel at the iconic bridge that connects the Doge’s Palace to the prison.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678920',
      activity_name: 'Murano Glass Factory Tour',
      activity_type: 'Factory Tours',
      cost: '€12 for a guided tour',
      activity_description: 'See master glassblowers at work and learn about the history of this famous Venetian art.',
      activity_image: ''
    },
    {
      activity_id: 'ven-012345678921',
      activity_name: 'Lido Beach',
      activity_type: 'Beaches',
      cost: 'Free',
      activity_description: 'Escape the city heat and relax on the sandy beaches of Lido island.',
      activity_image: ''
    },

    // bangkok
    {
      activity_id: 'bkk-000001',
      activity_name: 'Grand Palace',
      activity_type: 'Historic Sites',
      cost: '500 THB',
      activity_description: 'Visit the beautiful Grand Palace, which was once the residence of the Kings of Thailand.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000002',
      activity_name: 'Wat Phra Kaew',
      activity_type: 'Temples',
      cost: '500 THB',
      activity_description: 'Marvel at the beauty of the Emerald Buddha and the intricate architecture of the temple.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000003',
      activity_name: 'Wat Arun',
      activity_type: 'Temples',
      cost: '100 THB',
      activity_description: 'Climb the steep steps of the temple for a panoramic view of Bangkok and the Chao Phraya River.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000004',
      activity_name: 'Chatuchak Weekend Market',
      activity_type: 'Shopping',
      cost: '',
      activity_description: 'Shop for everything from clothes to souvenirs at this massive weekend market.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000005',
      activity_name: 'Khao San Road',
      activity_type: 'Nightlife',
      cost: '',
      activity_description: 'Experience Bangkok’s nightlife at the infamous Khao San Road, known for its bars, restaurants, and street vendors.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000006',
      activity_name: 'Wat Pho',
      activity_type: 'Temples',
      cost: '100 THB',
      activity_description: 'Explore the stunning temple complex and see the largest reclining Buddha statue in Thailand.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000007',
      activity_name: 'Jim Thompson House',
      activity_type: 'Museums',
      cost: '200 THB',
      activity_description: 'Learn about the life of Jim Thompson, an American entrepreneur who revitalized the Thai silk industry, at his former residence.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000008',
      activity_name: 'Wat Traimit',
      activity_type: 'Temples',
      cost: '40 THB',
      activity_description: 'See the world’s largest solid gold Buddha statue at this temple.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000009',
      activity_name: 'Lumpini Park',
      activity_type: 'Parks',
      cost: '',
      activity_description: 'Escape the hustle and bustle of the city and relax in this beautiful park with a lake and plenty of greenery.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000010',
      activity_name: 'Asiatique The Riverfront',
      activity_type: 'Shopping',
      cost: '',
      activity_description: 'Shop, dine, and enjoy the scenic views of the Chao Phraya River at this outdoor mall.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-000011',
      activity_name: 'Siam Paragon',
      activity_type: 'Shopping',
      cost: '',
      activity_description: 'Shop for luxury brands and enjoy a variety of restaurants and entertainment at this upscale mall.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-0123456789026',
      activity_name: 'Chatuchak Weekend Market',
      activity_type: 'Shopping',
      cost: 'Free entry, cost varies for shopping and food',
      activity_description: 'Explore one of the world\'s largest outdoor markets, with over 8,000 stalls selling everything from food to clothing to antiques.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-0123456789027',
      activity_name: 'Jim Thompson House',
      activity_type: 'Museums',
      cost: '100-200 THB per person',
      activity_description: 'Visit the beautiful teakwood house of American businessman Jim Thompson, which now serves as a museum of Thai art and architecture.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-0123456789028',
      activity_name: 'Lumpini Park',
      activity_type: 'Outdoor activities',
      cost: 'Free entry',
      activity_description: 'Escape the chaos of the city and relax in this lush green park, which features a lake, jogging paths, and even free outdoor aerobics classes in the morning and evening.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-0123456789029',
      activity_name: 'Wat Arun (Temple of Dawn)',
      activity_type: 'Religious sites',
      cost: '50 THB per person',
      activity_description: 'Visit one of Bangkok\'s most iconic temples, which is known for its beautiful architecture and intricate details, especially when lit up at night.',
      activity_image: ''
    },
    {
      activity_id: 'bkk-0123456789030',
      activity_name: 'Wat Phra Kaew (Temple of the Emerald Buddha)',
      activity_type: 'Religious sites',
      cost: '500 THB per person',
      activity_description: 'See the most sacred temple in Thailand, which houses the revered Emerald Buddha statue and is surrounded by other beautiful buildings and sculptures.',
      activity_image: ''
    },

    // hanoi
    {
      activity_id: 'han-012345678901',
      activity_name: 'Hoan Kiem Lake',
      activity_type: 'Parks & Nature',
      cost: 'Free',
      activity_description: 'Visit the picturesque Hoan Kiem Lake, a peaceful oasis in the middle of Hanoi.',
      activity_image: ''
    },
    {
      activity_id: 'han-123456789012',
      activity_name: 'Hanoi Old Quarter',
      activity_type: 'Historic Sites',
      cost: 'Free',
      activity_description: 'Explore the charming Hanoi Old Quarter, where you can see traditional architecture and experience local life.',
      activity_image: ''
    },
    {
      activity_id: 'han-234567890123',
      activity_name: 'Temple of Literature',
      activity_type: 'Historic Sites',
      cost: 'VND 30,000',
      activity_description: 'Visit the Temple of Literature, Vietnam’s first university and a beautiful example of traditional Vietnamese architecture.',
      activity_image: ''
    },
    {
      activity_id: 'han-345678901234',
      activity_name: 'Hoa Lo Prison',
      activity_type: 'Museums',
      cost: 'VND 30,000',
      activity_description: 'Learn about Vietnam’s history of resistance against French colonialism at the Hoa Lo Prison, also known as the “Hanoi Hilton.”',
      activity_image: ''
    },
    {
      activity_id: 'han-456789012345',
      activity_name: 'West Lake',
      activity_type: 'Parks & Nature',
      cost: 'Free',
      activity_description: 'Take a stroll along the banks of West Lake, the largest lake in Hanoi, and enjoy beautiful views of the city.',
      activity_image: ''
    },
    {
      activity_id: 'han-567890123456',
      activity_name: 'Vietnam Museum of Ethnology',
      activity_type: 'Museums',
      cost: 'VND 40,000',
      activity_description: 'Discover the cultural diversity of Vietnam’s 54 ethnic groups at the Vietnam Museum of Ethnology.',
      activity_image: ''
    },
    {
      activity_id: 'han-678901234567',
      activity_name: 'Hanoi Opera House',
      activity_type: 'Performances',
      cost: 'VND 300,000',
      activity_description: 'Experience the grandeur of the Hanoi Opera House, a beautiful French colonial building and a popular venue for opera and ballet performances.',
      activity_image: ''
    },
    {
      activity_id: 'han-789012345678',
      activity_name: 'Long Bien Bridge',
      activity_type: 'Historic Sites',
      cost: 'Free',
      activity_description: 'Walk across the Long Bien Bridge, an iconic symbol of Hanoi and a historic bridge that played a key role in the city’s development.',
      activity_image: ''
    },
    {
      activity_id: 'han-890123456789',
      activity_name: 'Vietnam Women’s Museum',
      activity_type: 'Museums',
      cost: 'VND 30,000',
      activity_description: 'Learn about the important role of women in Vietnamese history and culture at the Vietnam Women’s Museum.',
      activity_image: ''
    },
    {
      activity_id: 'han-901234567890',
      activity_name: 'Ba Vi National Park',
      activity_type: 'Parks & Nature',
      cost: 'VND 60,000',
      activity_description: 'Escape the city and explore the lush forests and mountain scenery of Ba Vi National Park.',
      activity_image: ''

    },

    // santorini
    {
      activity_id: 'snt-012345678901',
      activity_name: 'Watch the Sunset in Oia',
      activity_type: 'Sightseeing',
      cost: 'Free',
      activity_description: 'Experience the famous sunset in Oia, known for its breathtaking views.',
      activity_image: ''
    },
    {
      activity_id: 'snt-123456789012',
      activity_name: 'Visit the Ancient City of Akrotiri',
      activity_type: 'Museums',
      cost: '€12',
      activity_description: 'Explore the ancient city of Akrotiri, which was preserved under volcanic ash for centuries.',
      activity_image: ''
    },
    {
      activity_id: 'snt-234567890123',
      activity_name: 'Swim at the Red Beach',
      activity_type: 'Beaches',
      cost: 'Free',
      activity_description: 'Take a dip in the crystal clear waters of the Red Beach, known for its unique red volcanic sand.',
      activity_image: ''
    },
    {
      activity_id: 'snt-345678901234',
      activity_name: 'Hike from Fira to Oia',
      activity_type: 'Outdoor Activities',
      cost: 'Free',
      activity_description: 'Take in the stunning views of the Aegean Sea on a hike from Fira to Oia.',
      activity_image: ''
    },
    {
      activity_id: 'snt-456789012345',
      activity_name: 'Tour the Wineries',
      activity_type: 'Food & Drink',
      cost: 'Varies',
      activity_description: 'Sample some of the finest wines produced in Santorini on a winery tour.',
      activity_image: ''
    },
    {
      activity_id: 'snt-567890123456',
      activity_name: 'Take a Boat Tour of the Caldera',
      activity_type: 'Boat Tours',
      cost: '€50',
      activity_description: 'See the stunning beauty of the Santorini Caldera on a boat tour.',
      activity_image: ''
    },
    {
      activity_id: 'snt-678901234567',
      activity_name: 'Visit the Byzantine Castle Ruins',
      activity_type: 'Historical Sites',
      cost: 'Free',
      activity_description: 'Explore the ruins of the Byzantine castle, located in the heart of Santorini.',
      activity_image: ''
    },
    {
      activity_id: 'snt-789012345678',
      activity_name: 'Relax at Perissa Beach',
      activity_type: 'Beaches',
      cost: 'Free',
      activity_description: 'Unwind on the black sand beach of Perissa, known for its crystal clear waters.',
      activity_image: ''
    },
    {
      activity_id: 'snt-890123456789',
      activity_name: 'Discover the Village of Pyrgos',
      activity_type: 'Sightseeing',
      cost: 'Free',
      activity_description: 'Wander through the charming streets of Pyrgos, a traditional Greek village.',
      activity_image: ''
    },
    {
      activity_id: 'snt-901234567890',
      activity_name: 'Visit the Monastery of Profitis Ilias',
      activity_type: 'Religious Sites',
      cost: 'Free',
      activity_description: 'Explore the Monastery of Profitis Ilias, located at the highest point of Santorini.',
      activity_image: ''
    },

    // amsterdam
    {
      activity_id: 'ams-0123456789012',
      activity_name: 'Van Gogh Museum',
      activity_type: 'Museums',
      cost: '€19',
      activity_description: 'Explore the largest collection of Vincent van Gogh\'s paintings and drawings at the Van Gogh Museum.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789013',
      activity_name: 'Anne Frank House',
      activity_type: 'Museums',
      cost: '€12.50',
      activity_description: 'Visit the historic building where Anne Frank and her family hid from the Nazis during World War II.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789014',
      activity_name: 'Rijksmuseum',
      activity_type: 'Museums',
      cost: '€20',
      activity_description: 'Discover the art and history of the Netherlands at the Rijksmuseum, home to over 8,000 objects from the Dutch Golden Age.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789015',
      activity_name: 'Vondelpark',
      activity_type: 'Parks',
      cost: '',
      activity_description: 'Relax in the largest park in Amsterdam, which offers walking paths, bike rentals, and live music performances.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789016',
      activity_name: 'Jordaan',
      activity_type: 'Neighborhoods',
      cost: '',
      activity_description: 'Stroll through the picturesque streets of Jordaan, filled with trendy shops, art galleries, and cozy cafes.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789017',
      activity_name: 'Amsterdam Canal Cruise',
      activity_type: 'Boat Tours',
      cost: '€20',
      activity_description: 'See the city from a different perspective with a canal cruise, which offers views of historic bridges, houseboats, and hidden gardens.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789018',
      activity_name: 'Red Light District',
      activity_type: 'Neighborhoods',
      cost: '',
      activity_description: 'Experience Amsterdam\'s most controversial neighborhood, which features legal prostitution, sex shops, and coffee shops.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789019',
      activity_name: 'Bike Tour',
      activity_type: 'Tours',
      cost: '€25',
      activity_description: 'Join a guided bike tour and see the city\'s top attractions, including the Dam Square, the Anne Frank House, and the Royal Palace.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789020',
      activity_name: 'Heineken Experience',
      activity_type: 'Breweries',
      cost: '€21',
      activity_description: 'Discover the history and brewing process of Heineken beer with a guided tour of the former brewery, including beer tastings.',
      activity_image: ''
    },
    {
      activity_id: 'ams-0123456789021',
      activity_name: 'Albert Cuyp Market',
      activity_type: 'Markets',
      cost: '',
      activity_description: 'Shop for souvenirs, fresh produce, and street food at Amsterdam\'s largest street market, located in the De Pijp neighborhood.',
      activity_image: ''
    },
    // rio
    {
      activity_id: 'rio-012345678912',
      activity_name: 'Christ the Redeemer',
      activity_type: 'Landmarks & Monuments',
      cost: 'BRL 85',
      activity_description: 'Visit the iconic statue of Christ the Redeemer, located atop Corcovado Mountain with stunning panoramic views of Rio de Janeiro.',
      activity_image: ''
    },
    {
      activity_id: 'rio-109876543210',
      activity_name: 'Copacabana Beach',
      activity_type: 'Beaches',
      cost: '',
      activity_description: 'Enjoy the sun and sand at one of the world\'s most famous beaches, known for its wide stretch of golden sand and iconic black and white tiled boardwalk.',
      activity_image: ''
    },
    {
      activity_id: 'rio-234567890123',
      activity_name: 'Sugarloaf Mountain',
      activity_type: 'Landmarks & Monuments',
      cost: 'BRL 110',
      activity_description: 'Take a cable car to the top of Sugarloaf Mountain for incredible views of Rio de Janeiro and its surrounding landscape.',
      activity_image: ''
    },
    {
      activity_id: 'rio-345678901234',
      activity_name: 'Tijuca National Park',
      activity_type: 'National Parks',
      cost: 'BRL 28',
      activity_description: 'Explore the world\'s largest urban forest at Tijuca National Park, home to an abundance of flora and fauna and numerous hiking trails.',
      activity_image: ''
    },
    {
      activity_id: 'rio-456789012345',
      activity_name: 'Rio de Janeiro Botanical Garden',
      activity_type: 'Gardens',
      cost: 'BRL 20',
      activity_description: 'Visit the Rio de Janeiro Botanical Garden, featuring over 6,500 species of plants, including rare and exotic varieties.',
      activity_image: ''
    },
    {
      activity_id: 'rio-567890123456',
      activity_name: 'Museum of Tomorrow',
      activity_type: 'Museums',
      cost: 'BRL 30',
      activity_description: 'Experience the future at the Museum of Tomorrow, a science museum with interactive exhibits exploring the possibilities of science and technology.',
      activity_image: ''
    },
    {
      activity_id: 'rio-678901234567',
      activity_name: 'Maracanã Stadium',
      activity_type: 'Sports Venues',
      cost: 'BRL 50',
      activity_description: 'Tour the historic Maracanã Stadium, one of the world\'s largest football stadiums and host of the 2014 FIFA World Cup Final.',
      activity_image: ''
    },
    {
      activity_id: 'rio-789012345678',
      activity_name: 'Escadaria Selarón',
      activity_type: 'Landmarks & Monuments',
      cost: '',
      activity_description: 'Climb the colorful steps of Escadaria Selarón, a staircase adorned with over 2,000 tiles from around the world.',
      activity_image: ''
    },
    {
      activity_id: 'rio-890123456789',
      activity_name: 'Lapa Arches',
      activity_type: 'Landmarks & Monuments',
      cost: '',
      activity_description: 'Marvel at the beautiful Lapa Arches, an aqueduct built in the mid-18th century that now serves as a landmark and symbol of Rio de Janeiro.',
      activity_image: ''
    },
    {
      activity_id: 'rio-0987654321123',
      activity_name: 'Parque Lage',
      activity_type: 'Park',
      cost: 'Free',
      activity_description: 'Explore the beautiful Parque Lage, a historic park with gardens, trails, and a mansion that houses an art school.',
      activity_image: ''
    },
    // lisbon
    {
      activity_id: 'lis-012345678901',
      activity_name: 'Belem Tower',
      activity_type: 'Sightseeing',
      cost: '€6',
      activity_description: 'Visit this iconic tower that once guarded Lisbon\'s harbor, and take in stunning views of the city.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678902',
      activity_name: 'Jerónimos Monastery',
      activity_type: 'Religious Sites',
      cost: '€12',
      activity_description: 'Explore this UNESCO World Heritage Site, which is renowned for its beautiful Gothic architecture.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678903',
      activity_name: 'Lisbon Oceanarium',
      activity_type: 'Aquariums',
      cost: '€19',
      activity_description: 'Discover the wonders of the ocean at Europe\'s second-largest aquarium, which houses over 8,000 marine animals.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678904',
      activity_name: 'Castelo de Sao Jorge',
      activity_type: 'Historic Sites',
      cost: '€10',
      activity_description: 'Visit this historic castle that offers panoramic views of the city, and explore the castle grounds and museum.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678905',
      activity_name: 'Tram 28',
      activity_type: 'Tours',
      cost: '€3',
      activity_description: 'Take a ride on this iconic Lisbon tram, which winds through the city\'s narrow streets and historic neighborhoods.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678906',
      activity_name: 'Calouste Gulbenkian Museum',
      activity_type: 'Museums',
      cost: '€10',
      activity_description: 'Explore this world-class art museum, which features a wide range of collections including ancient art, European paintings, and more.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678907',
      activity_name: 'Pasteis de Belem',
      activity_type: 'Food & Drink',
      cost: '€2',
      activity_description: 'Indulge in the famous Portuguese egg tarts at this historic pastry shop, which has been open since 1837.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678908',
      activity_name: 'Sintra',
      activity_type: 'Day Trips & Excursions',
      cost: '€10-20',
      activity_description: 'Take a day trip from Lisbon to the charming town of Sintra, known for its fairytale castles and stunning landscapes.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678909',
      activity_name: 'Alfama',
      activity_type: 'Neighborhoods',
      cost: '',
      activity_description: 'Explore the historic Alfama neighborhood, with its narrow streets, colorful buildings, and charming cafes and shops.',
      activity_image: ''
    },
    {
      activity_id: 'lis-012345678910',
      activity_name: 'Museu Nacional do Azulejo',
      activity_type: 'Museums',
      cost: '€5',
      activity_description: 'Discover the history and artistry of Portugal\'s famous ceramic tiles at this fascinating museum.',
      activity_image: ''
    },
    // iceland
    {
      activity_id: 'rey-0123456789012',
      activity_name: 'Hallgrímskirkja',
      activity_type: 'Landmarks',
      cost: 'Free',
      activity_description: 'Visit Reykjavik’s iconic church, known for its unique design and stunning views of the city.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789013',
      activity_name: 'The Icelandic Phallological Museum',
      activity_type: 'Museums',
      cost: 'ISK 1750 (USD 14)',
      activity_description: 'Explore a collection of over 215 phallic specimens from various mammals at this one-of-a-kind museum.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789014',
      activity_name: 'Whale Watching',
      activity_type: 'Nature & Wildlife',
      cost: 'ISK 10,900 (USD 86)',
      activity_description: 'Take a boat tour from Reykjavik harbor to see humpback whales, minke whales, dolphins, and more in their natural habitat.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789015',
      activity_name: 'Harpa Concert Hall and Conference Centre',
      activity_type: 'Landmarks',
      cost: 'Free',
      activity_description: 'Admire the stunning glass façade of this modern building, which hosts concerts, conferences, and other events throughout the year.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789016',
      activity_name: 'Golden Circle Tour',
      activity_type: 'Tours & Sightseeing',
      cost: 'ISK 12,900 (USD 102)',
      activity_description: 'Embark on a full-day guided tour to see some of Iceland’s most popular attractions, including Thingvellir National Park, Geysir, and Gullfoss waterfall.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789017',
      activity_name: 'Blue Lagoon Spa',
      activity_type: 'Spas & Wellness',
      cost: 'ISK 10,200 (USD 81)',
      activity_description: 'Relax in the warm, mineral-rich waters of the Blue Lagoon, surrounded by stunning volcanic landscapes.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789018',
      activity_name: 'Laugavegur Street',
      activity_type: 'Shopping',
      cost: 'Free',
      activity_description: 'Stroll along Reykjavik’s main shopping street, lined with a variety of boutiques, restaurants, and cafes.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789019',
      activity_name: 'Aurora Borealis (Northern Lights) Tour',
      activity_type: 'Tours & Sightseeing',
      cost: 'ISK 10,900 (USD 86)',
      activity_description: 'Take a guided tour outside of Reykjavik to see the mesmerizing Aurora Borealis, a natural phenomenon that lights up the night sky.',
      activity_image: ''
    },
    {
      activity_id: 'rey-0123456789020',
      activity_name: 'Perlan Museum',
      activity_type: 'Museums',
      cost: 'ISK 3500 (USD 28)',
      activity_description: "Learn about Iceland’s natural wonders and history at this unique museum...",
      activity_image: ''

    },
    {
      activity_id: 'rey-0987654321011',
      activity_name: 'The Sun Voyager Sculpture',
      activity_type: 'Landmarks',
      cost: 'Free',
      activity_description: 'Visit the iconic Sun Voyager sculpture located on the waterfront, which represents a dreamboat and symbolizes the promise of undiscovered territory.',
      activity_image: ''
    },
    // singapore
    {
      activity_id: 'sin-0123456789012',
      activity_name: 'Gardens by the Bay',
      activity_type: 'Nature & Parks',
      cost: 'From $28.80 SGD',
      activity_description: 'Visit Singapore’s futuristic park, complete with giant tree-like structures and stunning light shows.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789013',
      activity_name: 'Marina Bay Sands',
      activity_type: 'Sights & Landmarks',
      cost: '',
      activity_description: 'Visit the iconic Marina Bay Sands building, featuring a luxury hotel, casino, mall, and infinity pool on the rooftop.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789014',
      activity_name: 'Singapore Zoo',
      activity_type: 'Zoos & Aquariums',
      cost: 'From $39 SGD',
      activity_description: 'Experience the world-renowned Singapore Zoo, featuring over 2,800 animals across 300 species in a lush rainforest setting.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789015',
      activity_name: 'Chinatown',
      activity_type: 'Neighborhoods',
      cost: '',
      activity_description: 'Explore the vibrant and bustling Chinatown district, home to temples, markets, and delicious street food.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789016',
      activity_name: 'Universal Studios Singapore',
      activity_type: 'Theme Parks',
      cost: 'From $81 SGD',
      activity_description: 'Experience the thrilling rides and attractions at Universal Studios Singapore, featuring themed zones based on popular movies and TV shows.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789017',
      activity_name: 'Sentosa Island',
      activity_type: 'Islands',
      cost: '',
      activity_description: 'Escape to the sunny island of Sentosa, featuring beaches, attractions, and luxury resorts.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789018',
      activity_name: 'ArtScience Museum',
      activity_type: 'Museums',
      cost: 'From $14 SGD',
      activity_description: 'Discover the intersection of art and science at the ArtScience Museum, featuring immersive exhibitions and installations.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789019',
      activity_name: 'Singapore Flyer',
      activity_type: 'Sights & Landmarks',
      cost: 'From $33 SGD',
      activity_description: 'Take a ride on the iconic Singapore Flyer, offering stunning views of the city skyline and surrounding area.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789020',
      activity_name: 'Merlion Park',
      activity_type: 'Sights & Landmarks',
      cost: '',
      activity_description: 'Snap a photo with the iconic Merlion statue at Merlion Park, a symbol of Singapore’s heritage and culture.',
      activity_image: ''
    },
    {
      activity_id: 'sin-0123456789021',
      activity_name: 'Haw Par Villa',
      activity_type: 'Theme Parks',
      cost: 'From $10 SGD',
      activity_description: 'Explore the strange and surreal world of Haw Par Villa, featuring over 1,000 colorful and quirky sculptures and dioramas.',
      activity_image: ''
    },
    // barcelona
    {
      activity_id: 'bcn-0987654321123',
      activity_name: 'La Boqueria Market',
      activity_type: 'Markets',
      cost: '',
      activity_description: 'Browse the colorful stalls and sample local cuisine at Barcelona\'s most famous market.',
      activity_image: ''
    },
    {
      activity_id: 'bcn-0987654321124',
      activity_name: 'Palau de la Música Catalana',
      activity_type: 'Concerts',
      cost: '$$',
      activity_description: 'Experience a performance at this stunning concert hall known for its intricate modernist architecture.',
      activity_image: ''
    },
    {
      activity_id: 'bcn-0987654321125',
      activity_name: 'Park Güell',
      activity_type: 'Parks',
      cost: '$',
      activity_description: 'Take a stroll through this whimsical park designed by Gaudí, featuring colorful mosaics and unique sculptures.',
      activity_image: ''
    },
    {
      activity_id: 'bcn-0987654321126',
      activity_name: 'Barceloneta Beach',
      activity_type: 'Beaches',
      cost: '',
      activity_description: 'Soak up the sun and enjoy the vibrant atmosphere of Barcelona\'s most popular beach.',
      activity_image: ''
    },
    {
      activity_id: 'bcn-0987654321127',
      activity_name: 'Casa Milà',
      activity_type: 'Museums',
      cost: '$$',
      activity_description: 'Explore the unique architecture and design of this famous Gaudí building, known for its curving stone facade.',
      activity_image: ''
    },
    {
      activity_id: 'bcn-0987654321128',
      activity_name: 'Camp Nou',
      activity_type: 'Sports',
      cost: '$$$',
      activity_description: 'Visit the largest stadium in Europe and home to FC Barcelona, one of the most famous football clubs in the world.',
      activity_image: ''
    },
    {
      activity_id: 'bcn-0987654321129',
      activity_name: 'Montserrat Monastery',
      activity_type: 'Religious Sites',
      cost: '$$',
      activity_description: 'Take a day trip to this stunning mountaintop monastery and enjoy breathtaking views of the Catalan countryside.',
      activity_image: ''
    },
    {
      activity_id: 'bcn-0987654321130',
      activity_name: 'Gothic Quarter',
      activity_type: 'Historic Sites',
      cost: '',
      activity_description: 'Step back in time and explore the winding streets and ancient architecture of Barcelona\'s Gothic Quarter.',
      activity_image: ''
    },
    // madrid
    {
      activity_id: 'mad-098765432112',
      activity_name: 'Palacio Real',
      activity_type: 'Sightseeing',
      cost: '€13',
      activity_description: 'Explore the official residence of the Spanish royal family with over 3,000 rooms and a vast collection of art and furniture.',
      activity_image: ''
    },
    {
      activity_id: 'mad-098765432113',
      activity_name: 'El Rastro',
      activity_type: 'Market',
      cost: '',
      activity_description: 'Experience one of the oldest and largest open-air markets in Europe with over 3,500 stalls selling everything from clothes to antiques.',
      activity_image: ''
    },
    {
      activity_id: 'mad-098765432114',
      activity_name: 'Parque del Buen Retiro',
      activity_type: 'Park',
      cost: '',
      activity_description: 'Relax in this beautiful park with lush gardens, a large lake, and several historical buildings including the Crystal Palace.',
      activity_image: ''
    },
    {
      activity_id: 'mad-098765432115',
      activity_name: 'Museo Nacional Centro de Arte Reina Sofía',
      activity_type: 'Museum',
      cost: '€10',
      activity_description: 'Admire an impressive collection of contemporary art including works by Picasso, Dalí, and Miró in this museum located in a former hospital.',
      activity_image: ''
    },
    {
      activity_id: 'mad-098765432116',
      activity_name: 'Plaza Mayor',
      activity_type: 'Sightseeing',
      cost: '',
      activity_description: 'Visit the bustling main square of Madrid with its iconic statue of King Philip III and surrounded by historic buildings and restaurants.',
      activity_image: ''
    },
    // cairo egypt
    {
      activity_id: 'cai-0123456789012',
      activity_name: 'The Great Pyramid of Giza',
      activity_type: 'Sightseeing',
      cost: '$25',
      activity_description: 'Explore one of the ancient world wonders, the Great Pyramid of Giza, and learn about its rich history and cultural significance.',
      activity_image: ''
    },
    {
      activity_id: 'cai-1234567890123',
      activity_name: 'Khan El Khalili Bazaar',
      activity_type: 'Shopping',
      cost: '',
      activity_description: 'Shop for souvenirs and unique items at the historic Khan El Khalili Bazaar, a vibrant and bustling marketplace.',
      activity_image: ''
    },
    {
      activity_id: 'cai-2345678901234',
      activity_name: 'Egyptian Museum',
      activity_type: 'Museums',
      cost: '$15',
      activity_description: 'Discover Egypt\'s fascinating history and culture at the Egyptian Museum, home to a vast collection of ancient artifacts and treasures.',
      activity_image: ''
    },
    {
      activity_id: 'cai-3456789012345',
      activity_name: 'Al-Azhar Park',
      activity_type: 'Nature & Parks',
      cost: '$5',
      activity_description: 'Relax and enjoy the beautiful scenery of Al-Azhar Park, a lush green oasis in the heart of Cairo.',
      activity_image: ''
    },
    {
      activity_id: 'cai-4567890123456',
      activity_name: 'Coptic Cairo',
      activity_type: 'Religious Sites',
      cost: '$10',
      activity_description: 'Visit the historic Coptic Cairo neighborhood and explore its many churches and religious sites, including the Hanging Church and the Church of St. George.',
      activity_image: ''
    },
    {
      activity_id: 'cai-5678901234567',
      activity_name: 'Islamic Cairo',
      activity_type: 'Historic Sites',
      cost: '$8',
      activity_description: 'Discover the rich history and cultural heritage of Islamic Cairo, home to many historic mosques, madrasas, and monuments.',
      activity_image: ''
    },
    {
      activity_id: 'cai-6789012345678',
      activity_name: 'Nile River Cruise',
      activity_type: 'Boat Tours',
      cost: '$50',
      activity_description: 'Take a relaxing cruise along the Nile River and enjoy stunning views of Cairo\'s skyline and iconic landmarks.',
      activity_image: ''
    },
    {
      activity_id: 'cai-7890123456789',
      activity_name: 'Saqqara',
      activity_type: 'Archaeological Sites',
      cost: '$20',
      activity_description: 'Explore the ancient ruins of Saqqara, including the famous Step Pyramid of Djoser and other fascinating structures and artifacts.',
      activity_image: ''
    },
    {
      activity_id: 'cai-8901234567890',
      activity_name: 'Felucca Ride',
      activity_type: 'Boat Tours',
      cost: '$30',
      activity_description: 'Experience the traditional Egyptian way of life with a peaceful felucca ride on the Nile River, complete with stunning views and fresh breezes.',
      activity_image: ''
    },
    {
      activity_id: 'cai-9012345678901',
      activity_name: 'Sound and Light Show at Giza',
      activity_type: 'Nightlife',
      cost: '$25',
      activity_description: 'Witness the impressive Sound and Light Show at the Great Pyramid of Giza, featuring stunning visual effects.',
      activity_image: ''
    },
    // beijing
    {
      activity_id: 'pek-0123456789012',
      activity_name: 'The Great Wall of China',
      activity_type: 'Landmarks',
      cost: '¥60-¥120',
      activity_description: 'Hike along one of the most famous landmarks in the world, and enjoy stunning views of the Chinese countryside.',
      activity_image: ''
    },
    {
      activity_id: 'pek-1234567890123',
      activity_name: 'Forbidden City',
      activity_type: 'Museums',
      cost: '¥60-¥80',
      activity_description: 'Visit the former Chinese imperial palace, and admire the beautiful architecture and rich history of this iconic site.',
      activity_image: ''
    },
    {
      activity_id: 'pek-2345678901234',
      activity_name: 'Summer Palace',
      activity_type: 'Parks & Gardens',
      cost: '¥30-¥60',
      activity_description: 'Explore the stunning gardens, temples, and pavilions of this vast imperial park, which served as a summer retreat for Chinese emperors.',
      activity_image: ''
    },
    {
      activity_id: 'pek-3456789012345',
      activity_name: 'Temple of Heaven',
      activity_type: 'Religious Sites',
      cost: '¥15-¥35',
      activity_description: 'Visit the sacred complex of Taoist buildings, which served as a site of imperial worship for centuries.',
      activity_image: ''
    },
    {
      activity_id: 'pek-4567890123456',
      activity_name: 'Beijing National Stadium',
      activity_type: 'Sports Venues',
      cost: '¥50-¥100',
      activity_description: 'Visit the iconic "Bird\'s Nest" stadium, which hosted the 2008 Summer Olympics and is still used for major sporting events today.',
      activity_image: ''
    },
    {
      activity_id: 'pek-5678901234567',
      activity_name: '798 Art District',
      activity_type: 'Art Galleries',
      cost: '',
      activity_description: 'Explore the contemporary art galleries, museums, and cafes of this trendy neighborhood, which has become a hub for Beijing\'s art scene.',
      activity_image: ''
    },
    {
      activity_id: 'pek-6789012345678',
      activity_name: 'Houhai Lake',
      activity_type: 'Lakes',
      cost: 'Free',
      activity_description: 'Take a relaxing stroll around this picturesque lake, which is surrounded by restaurants, bars, and traditional Chinese architecture.',
      activity_image: ''
    },
    {
      activity_id: 'pek-7890123456789',
      activity_name: 'Beihai Park',
      activity_type: 'Parks & Gardens',
      cost: '¥5-¥10',
      activity_description: 'Visit the beautiful park, which includes a lake, gardens, temples, and pavilions, and has a history dating back over 1,000 years.',
      activity_image: ''
    },
    {
      activity_id: 'pek-8901234567890',
      activity_name: 'Ming Tombs',
      activity_type: 'Historical Sites',
      cost: '¥30-¥130',
      activity_description: 'Explore the impressive mausoleums and burial sites of 13 of the 16 Ming emperors, who ruled China from the 14th to 17th centuries.',
      activity_image: ''
    },
    {
      activity_id: 'bei-0987654321123',
      activity_name: 'Summer Palace',
      activity_type: 'Historical Sites',
      cost: 'CNY 60',
      activity_description: 'Visit the beautiful Summer Palace, a UNESCO World Heritage Site, and admire the architecture, gardens, and lake views.',
      activity_image: ''
    },
    // shanghai
    {
      activity_id: 'sha-012345678901',
      activity_name: 'The Bund',
      activity_type: 'Landmarks & Historical Buildings',
      cost: 'Free',
      activity_description: 'Take a stroll along the famous waterfront promenade of Shanghai and admire the city skyline.',
      activity_image: ''
    },
    {
      activity_id: 'sha-012345678902',
      activity_name: 'Yu Garden',
      activity_type: 'Parks',
      cost: 'CNY 40',
      activity_description: 'Explore the classical Chinese garden with its stunning rock formations, koi ponds, and pavilions.',
      activity_image: ''
    },
    {
      activity_id: 'sha-012345678903',
      activity_name: 'Shanghai Museum',
      activity_type: 'Museums',
      cost: 'Free',
      activity_description: 'Discover the art and culture of China through a vast collection of ancient artifacts and treasures.',
      activity_image: ''
    },
    {
      activity_id: 'sha-012345678904',
      activity_name: 'Jade Buddha Temple',
      activity_type: 'Temples',
      cost: 'CNY 30',
      activity_description: 'Pay homage to the two jade Buddha statues and admire the ornate architecture of this active Buddhist temple.',
      activity_image: ''
    },
    {
      activity_id: 'sha-012345678905',
      activity_name: 'Tianzifang',
      activity_type: 'Shopping',
      cost: 'Free',
      activity_description: 'Shop for souvenirs and local crafts in this vibrant artsy district with narrow alleyways and traditional shikumen houses.',
      activity_image: ''
    },
    {
      activity_id: 'sha-012345678906',
      activity_name: 'Shanghai Tower',
      activity_type: 'Observation Decks & Towers',
      cost: 'CNY 180',
      activity_description: 'Get a bird\'s eye view of Shanghai from the observation deck of the world\'s second-tallest building.',
      activity_image: ''
    },
    {
      activity_id: 'sha-012345678907',
      activity_name: 'Zhujiajiao Water Town',
      activity_type: 'Tours',
      cost: 'CNY 80',
      activity_description: 'Escape the hustle and bustle of Shanghai and explore the charming water town of Zhujiajiao, known for its canals and bridges.',
      activity_image: ''
    },
    // kenya
    {
      activity_id: 'msm-0123456789012',
      activity_name: 'Safari in Masai Mara National Reserve',
      activity_type: 'Safari',
      cost: '$150',
      activity_description: 'Experience the thrill of a lifetime on a safari through the Masai Mara National Reserve, home to some of the most spectacular wildlife in Africa.',
      activity_image: ''
    },
    {
      activity_id: 'msm-0123456789013',
      activity_name: 'Visit a Maasai Village',
      activity_type: 'Cultural Experience',
      cost: '$50',
      activity_description: 'Learn about the customs and traditions of the Maasai people by visiting one of their villages and interacting with locals.',
      activity_image: ''
    },
    {
      activity_id: 'msm-0123456789014',
      activity_name: 'Hot Air Balloon Ride',
      activity_type: 'Adventure',
      cost: '$400',
      activity_description: 'See the vast plains of Masai Mara from a unique perspective on a hot air balloon ride.',
      activity_image: ''
    },
    {
      activity_id: 'msm-0123456789015',
      activity_name: 'Nature Walk with a Guide',
      activity_type: 'Nature Walk',
      cost: '$30',
      activity_description: 'Explore the diverse flora and fauna of Masai Mara on a guided nature walk through the reserve.',
      activity_image: ''
    },
    {
      activity_id: 'msm-0123456789016',
      activity_name: 'Photography Tour',
      activity_type: 'Photography',
      cost: '$200',
      activity_description: 'Capture stunning images of the wildlife and landscapes of Masai Mara on a photography tour led by a professional photographer.',
      activity_image: ''
    },
    {
      activity_id: 'msm-0123456789017',
      activity_name: 'Bird Watching',
      activity_type: 'Nature',
      cost: '$20',
      activity_description: 'Observe a variety of bird species in their natural habitat in Masai Mara.',
      activity_image: ''
    },
    {
      activity_id: 'msm-0123456789018',
      activity_name: 'Hiking in Loita Hills',
      activity_type: 'Hiking',
      cost: '$80',
      activity_description: 'Embark on a challenging hike through the Loita Hills to experience the stunning landscapes and wildlife of Masai Mara from a different perspective.',
      activity_image: ''
    },
    {
      activity_id: 'msm-0123456789019',
      activity_name: 'Night Safari',
      activity_type: 'Safari',
      cost: '$250',
      activity_description: 'Experience the excitement of a night safari and discover the nocturnal animals that come out after dark in Masai Mara.',
      activity_image: ''
    },
    // ghana
    {
      activity_id: 'acc-0123456789020',
      activity_name: 'Osu Castle',
      activity_type: 'Historical Sites',
      cost: 'GHS 40',
      activity_description: 'Visit the Osu Castle, which was built by the Danes in the 17th century and was once a slave trade hub.',
      activity_image: ''
    },
    {
      activity_id: 'acc-0123456789021',
      activity_name: 'Labadi Beach',
      activity_type: 'Beaches',
      cost: 'Free',
      activity_description: 'Relax and enjoy the beautiful Labadi Beach, which is one of the most popular beaches in Accra.',
      activity_image: ''
    },
    {
      activity_id: 'acc-0123456789022',
      activity_name: 'National Museum of Ghana',
      activity_type: 'Museums',
      cost: 'GHS 10',
      activity_description: 'Explore the National Museum of Ghana, which features exhibits on Ghanaian history, culture, and art.',
      activity_image: ''
    },
    {
      activity_id: 'acc-0123456789023',
      activity_name: 'Kwame Nkrumah Memorial Park',
      activity_type: 'Parks',
      cost: 'GHS 5',
      activity_description: 'Pay homage to Ghana’s first president at the Kwame Nkrumah Memorial Park, which features his mausoleum and a museum.',
      activity_image: ''
    },
    {
      activity_id: 'acc-0123456789024',
      activity_name: 'Jamestown Lighthouse',
      activity_type: 'Historical Sites',
      cost: 'GHS 5',
      activity_description: 'Climb to the top of the Jamestown Lighthouse, which was built in the 1930s and offers great views of Accra.',
      activity_image: ''
    },
    {
      activity_id: 'acc-0123456789025',
      activity_name: 'Aburi Botanical Gardens',
      activity_type: 'Parks',
      cost: 'GHS 10',
      activity_description: 'Escape the city and take a day trip to the Aburi Botanical Gardens, which features beautiful flora and fauna.',
      activity_image: ''
    },
    {
      activity_id: 'acc-0123456789026',
      activity_name: 'Independence Square',
      activity_type: 'Historical Sites',
      cost: 'Free',
      activity_description: 'Visit Independence Square, which is the site where Ghana declared independence from Britain in 1957.',
      activity_image: ''
    },
    // el nideo
    {
      activity_id: 'eln-0123456789018',
      activity_name: 'Big Lagoon',
      activity_type: 'Sightseeing',
      cost: '₱200',
      activity_description: 'Take a boat tour to explore the Big Lagoon, known for its clear blue waters and towering limestone cliffs.',
      activity_image: ''
    },
    {
      activity_id: 'eln-0123456789019',
      activity_name: 'Small Lagoon',
      activity_type: 'Sightseeing',
      cost: '₱200',
      activity_description: 'Kayak through the crystal-clear waters of the Small Lagoon, surrounded by limestone cliffs and lush greenery.',
      activity_image: ''
    },
    {
      activity_id: 'eln-0123456789020',
      activity_name: 'Nacpan Beach',
      activity_type: 'Beaches',
      cost: '',
      activity_description: 'Relax on the pristine white sand of Nacpan Beach, and swim in the clear turquoise waters.',
      activity_image: ''
    },
    {
      activity_id: 'eln-0123456789021',
      activity_name: 'Taraw Peak',
      activity_type: 'Hiking',
      cost: '₱750',
      activity_description: 'Embark on a challenging hike to Taraw Peak, and be rewarded with stunning panoramic views of El Nido and the surrounding islands.',
      activity_image: ''
    },
    {
      activity_id: 'eln-0123456789022',
      activity_name: 'Helicopter Island',
      activity_type: 'Sightseeing',
      cost: '₱1500',
      activity_description: 'Take a boat tour to Helicopter Island, named for its unique shape when viewed from afar, and enjoy snorkeling in its crystal-clear waters.',
      activity_image: ''
    },
    {
      activity_id: 'eln-0123456789023',
      activity_name: 'Las Cabanas Beach',
      activity_type: 'Beaches',
      cost: '',
      activity_description: 'Soak up the sun on Las Cabanas Beach, and take in the breathtaking views of the sunset over the ocean.',
      activity_image: ''
    },
    {
      activity_id: 'eln-0123456789024',
      activity_name: 'Bulit Beach',
      activity_type: 'Beaches',
      cost: '',
      activity_description: 'Escape the crowds and enjoy the peaceful and secluded Bulit Beach, with its soft white sand and clear blue waters.',
      activity_image: ''
    }


  ]);
};
