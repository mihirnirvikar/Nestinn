const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image:
      "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image:
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image:
      "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:
      "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:
      "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image:
      "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:
      "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",

    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Unplug and unwind in this cozy mountain cabin surrounded by scenic views and fresh air.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",

    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Enjoy the city life in this sleek apartment located in the heart of downtown.",
    image:
      "https://images.unsplash.com/photo-1635933036183-d1f250072745?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1000,
    location: "New York",
    country: "United States",
  },
  {
    title: "Charming Countryside Home",
    description:
      "Relax in this peaceful countryside home with a large garden and farm views.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",

    price: 900,
    location: "Somerset",
    country: "United Kingdom",
  },
  {
    title: "Rustic Forest Lodge",
    description:
      "Get close to nature in this rustic lodge surrounded by towering pines.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=60",

    price: 1100,
    location: "British Columbia",
    country: "Canada",
  },
  {
    title: "Elegant Paris Flat",
    description:
      "Live the Parisian dream in this elegant flat with balcony views of the Eiffel Tower.",
    image:
      "https://plus.unsplash.com/premium_photo-1718285552468-87a89ecd1523?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 2000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Beachside Bungalow",
    description:
      "Step outside onto the sand from this cozy beachside bungalow.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",

    price: 1300,
    location: "Goa",
    country: "India",
  },
  {
    title: "Historic Stone Cottage",
    description:
      "Stay in this charming stone cottage with historic touches and modern comforts.",
    image:
      "https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 800,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Desert Dome Stay",
    description:
      "Experience the desert in a unique dome home with panoramic views of the sand dunes.",
    image:
      "https://plus.unsplash.com/premium_photo-1731393139788-e93bbe83d01e?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 950,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Tropical Jungle Villa",
    description:
      "Surround yourself with lush greenery in this luxury villa hidden in the jungle.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1700,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Coastal Spanish Home",
    description:
      "Enjoy ocean breezes in this beautiful home on the Spanish coast.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",

    price: 1400,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Modern Tokyo Studio",
    description:
      "Compact and stylish studio in the heart of Tokyo's vibrant cityscape.",
    image:
      "https://images.unsplash.com/photo-1560409471-ef52158a63fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Icelandic Retreat Cabin",
    description:
      "Escape to nature in this warm wooden cabin with geothermal spa access nearby.",
    image:
      "https://plus.unsplash.com/premium_photo-1669223464660-08f06bffabc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1250,
    location: "Reykjavík",
    country: "Iceland",
  },
  {
    title: "Greek Island Hideaway",
    description:
      "Whitewashed beauty in a peaceful Greek island village, perfect for sunsets.",
    image:
      "https://images.unsplash.com/photo-1752668223248-f49e9c042c23?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1600,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Swiss Alps Chalet",
    description:
      "Warm and elegant chalet with snow-capped views and ski-in/ski-out access.",
    image:
      "https://images.unsplash.com/photo-1706172314716-a885f31a04d6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 2100,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Secluded Scandinavian Cabin",
    description:
      "Minimal and serene Nordic cabin with forest surroundings and lake nearby.",
    image:
      "https://images.unsplash.com/photo-1708630283447-11c0a9936c1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1000,
    location: "Lofoten",
    country: "Norway",
  },
  {
    title: "Luxury Dubai Apartment",
    description:
      "Stay high above the city with luxury amenities and skyline views.",
    image:
      "https://images.unsplash.com/photo-1728486885278-305bad7cfd15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 2500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Rainforest Treehouse",
    description:
      "Sleep among the treetops in this handcrafted wooden treehouse deep in the rainforest.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",

    price: 1350,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Amsterdam Canal House",
    description:
      "Historic canal-side home with charming interiors and water views.",
    image:
      "https://images.unsplash.com/photo-1534203137048-137aa03c692e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1550,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Colorful Havana Flat",
    description:
      "Lively and colorful apartment in the heart of historic Havana streets.",
    image:
      "https://images.unsplash.com/photo-1528273616809-a032a10474d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 850,
    location: "Havana",
    country: "Cuba",
  },
  {
    title: "Lakeside Wooden Retreat",
    description:
      "Wake up to the sound of water lapping at the shore in this peaceful lakeside cabin.",
    image:
      "https://images.unsplash.com/photo-1696963589690-67326f721188?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 950,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Sunny Rooftop Loft",
    description:
      "This bright and airy loft offers rooftop views and cozy modern interiors.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",

    price: 1300,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Countryside Farm Stay",
    description:
      "Experience authentic farm life surrounded by rolling hills and open skies.",
    image:
      "https://images.unsplash.com/photo-1708254837326-8cd56e4fad41?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 800,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Vintage NYC Brownstone",
    description:
      "Stay in style with this charming vintage brownstone in the heart of Brooklyn.",
    image:
      "https://images.unsplash.com/photo-1661776351969-1011dbba7561?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1800,
    location: "Brooklyn",
    country: "United States",
  },
  {
    title: "Traditional Kyoto Ryokan",
    description:
      "Enjoy tatami floors, futon beds, and hot baths in this traditional Japanese inn.",
    image:
      "https://images.unsplash.com/photo-1738676721795-a8435cdb5f48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1250,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Ocean Cliff Villa",
    description:
      "Panoramic ocean views and luxury await you on the cliffs of this private villa.",
    image:
      "https://images.unsplash.com/photo-1744591571294-b9cba925a3b6?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 2200,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Hidden Jungle Bungalow",
    description:
      "Tucked into the greenery, this private jungle bungalow is perfect for unplugging.",
    image:
      "https://images.unsplash.com/photo-1568402102889-8307563f757f?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 950,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Snowy Alpine Getaway",
    description:
      "Stay cozy and warm inside while snowflakes dance outside your window.",
    image:
      "https://images.unsplash.com/photo-1738599778461-2f2f81bcdd02?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1900,
    location: "Innsbruck",
    country: "Austria",
  },
  {
    title: "Beach Hut Bliss",
    description:
      "Colorful beach hut just steps from turquoise waters and golden sands.",
    image:
      "https://plus.unsplash.com/premium_photo-1694475574403-d24268584350?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 850,
    location: "Boracay",
    country: "Philippines",
  },
  {
    title: "Artistic Bohemian Loft",
    description:
      "A creative dream — full of color, charm, and vintage finds in every corner.",
    image:
      "https://images.unsplash.com/photo-1680465496059-bfc63eb070f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1350,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Wilderness A-Frame Cabin",
    description:
      "Iconic A-frame surrounded by thick woods — pure peace and quiet.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",

    price: 1050,
    location: "Maine",
    country: "United States",
  },
  {
    title: "Private Island Paradise",
    description:
      "Live the dream on your own private island villa with crystal clear waters.",
    image:
      "https://images.unsplash.com/photo-1729708790880-ccd1c603525c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 5000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Riverside Scandinavian Retreat",
    description:
      "Simple luxury on the river — minimal design with maximum comfort.",
    image:
      "https://images.unsplash.com/photo-1731918314046-8f221a73ace5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1200,
    location: "Stockholm",
    country: "Sweden",
  },
  {
    title: "Sahara Desert Camp",
    description:
      "Adventure meets comfort in this unique desert glamping experience.",
    image:
      "https://images.unsplash.com/photo-1667143296510-6b35a8a356d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 900,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Peaceful Hilltop Homestay",
    description:
      "Watch the clouds drift below from this charming hilltop retreat.",
    image:
      "https://images.unsplash.com/photo-1743936937349-cc25fd691905?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1100,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Modern Desert Oasis",
    description:
      "Contemporary design meets desert beauty in this luxurious oasis.",
    image:
      "https://images.unsplash.com/photo-1622137276920-2351359e3450?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1700,
    location: "Palm Springs",
    country: "United States",
  },
  {
    title: "Floating River Cabin",
    description:
      "This unique stay floats on calm river waters for a one-of-a-kind experience.",
    image:
      "https://images.unsplash.com/photo-1662731453517-8a7b67647281?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1400,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Old Town Stone Apartment",
    description: "Historic charm and stone architecture meet modern comfort.",
    image:
      "https://plus.unsplash.com/premium_photo-1692388619456-641ea333bcb6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1150,
    location: "Dubrovnik",
    country: "Croatia",
  },
  {
    title: "Tree Canopy Dome",
    description:
      "Sleep in a bubble dome above the forest floor with stunning canopy views.",
    image:
      "https://plus.unsplash.com/premium_photo-1718204438600-e8481c2e5b0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1500,
    location: "Arenal",
    country: "Costa Rica",
  },
  {
    title: "Istanbul Rooftop Flat",
    description: "Enjoy skyline views of historic domes and bustling markets.",
    image:
      "https://images.unsplash.com/photo-1644336878001-077dda81bf82?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1250,
    location: "Istanbul",
    country: "Turkey",
  },
  {
    title: "Savannah Safari Tent",
    description: "Live the safari life with comfort in this stylish tent stay.",
    image:
      "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1000,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Seaside Greek Studio",
    description: "Cute and compact studio steps from the Aegean sea.",
    image:
      "https://plus.unsplash.com/premium_photo-1680194035595-476967e15ee2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 950,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Colombian Coffee Hacienda",
    description:
      "Stay on a working coffee farm surrounded by lush hills and birdsong.",
    image:
      "https://images.unsplash.com/photo-1613498248726-8922766cebdb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 950,
    location: "Salento",
    country: "Colombia",
  },
  {
    title: "Sunset Dome in the Desert",
    description: "Watch the desert sunset from your private clear-sky dome.",
    image:
      "https://images.unsplash.com/photo-1640751385695-9e09f24127c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1350,
    location: "Nevada",
    country: "United States",
  },
  {
    title: "Charming Stay in Goa",
    description:
      "Relax and unwind at this unique property in Goa, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1743523044760-bd7531263277?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1215,
    location: "Goa",
    country: "India",
  },
  {
    title: "Charming Stay in Himachal",
    description:
      "Relax and unwind at this unique property in Himachal, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1668350203226-bb8b7990e74a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1230,
    location: "Himachal",
    country: "India",
  },
  {
    title: "Charming Stay in Kerala",
    description:
      "Relax and unwind at this unique property in Kerala, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1718821585734-e22a8fc425a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1245,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Charming Stay in Rajasthan",
    description:
      "Relax and unwind at this unique property in Rajasthan, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1638904998527-a451c1fbd1cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1260,
    location: "Rajasthan",
    country: "India",
  },
  {
    title: "Charming Stay in Ladakh",
    description:
      "Relax and unwind at this unique property in Ladakh, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1747950232387-063c3527b191?q=80&w=1322&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1275,
    location: "Ladakh",
    country: "India",
  },
  {
    title: "Charming Stay in Mumbai",
    description:
      "Relax and unwind at this unique property in Mumbai, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1670577365952-91d1609f3a3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1290,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Charming Stay in Delhi",
    description:
      "Relax and unwind at this unique property in Delhi, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730447144-a2f7257e4a1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1305,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Charming Stay in Kolkata",
    description:
      "Relax and unwind at this unique property in Kolkata, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1675787287721-984b5fb2fd1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1320,
    location: "Kolkata",
    country: "India",
  },
  {
    title: "Charming Stay in Bangalore",
    description:
      "Relax and unwind at this unique property in Bangalore, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://plus.unsplash.com/premium_photo-1733266874906-104bbd3ca583?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1335,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Charming Stay in Pondicherry",
    description:
      "Relax and unwind at this unique property in Pondicherry, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1692894510629-6dd42caf9485?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1350,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Charming Stay in Sikkim",
    description:
      "Relax and unwind at this unique property in Sikkim, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1365,
    location: "Sikkim",
    country: "India",
  },
  {
    title: "Charming Stay in Manali",
    description:
      "Relax and unwind at this unique property in Manali, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1648404451719-b2852e0e7326?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1380,
    location: "Manali",
    country: "India",
  },
  {
    title: "Charming Stay in Darjeeling",
    description:
      "Relax and unwind at this unique property in Darjeeling, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1724650433574-6bc7beff73c6?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1395,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Charming Stay in Jaisalmer",
    description:
      "Relax and unwind at this unique property in Jaisalmer, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1589707195658-6a90a076ad25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1410,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Charming Stay in Udaipur",
    description:
      "Relax and unwind at this unique property in Udaipur, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1622462281019-f6118fc42e46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1425,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Charming Stay in Varanasi",
    description:
      "Relax and unwind at this unique property in Varanasi, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1549625926-27e10d8d7b26?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1440,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Charming Stay in Jaipur",
    description:
      "Relax and unwind at this unique property in Jaipur, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729529902-276ab321f391?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1455,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Charming Stay in Andaman",
    description:
      "Relax and unwind at this unique property in Andaman, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1599668187742-d047e6c6e0ac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1470,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Charming Stay in Ooty",
    description:
      "Relax and unwind at this unique property in Ooty, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1660918738010-295b09857f93?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1485,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Charming Stay in Coorg",
    description:
      "Relax and unwind at this unique property in Coorg, India. A perfect spot to explore the beauty of the region.",
    image:
      "https://images.unsplash.com/photo-1599922760936-e840fa373d8d?q=80&w=1278&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1500,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Stunning Stay in Agra",
    description:
      "Explore the local charm of Agra with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1616368309964-3a686de13b4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1310,
    location: "Agra",
    country: "India",
  },
  {
    title: "Stunning Stay in Amritsar",
    description:
      "Explore the local charm of Amritsar with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1588096344356-9b497caeeb64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D",

    price: 1322,
    location: "Amritsar",
    country: "India",
  },
  {
    title: "Stunning Stay in Nainital",
    description:
      "Explore the local charm of Nainital with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1641722888906-9c9b7f40ee4e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1334,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Stunning Stay in Shillong",
    description:
      "Explore the local charm of Shillong with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1661957883806-4f6d9ffff913?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1346,
    location: "Shillong",
    country: "India",
  },
  {
    title: "Stunning Stay in Rishikesh",
    description:
      "Explore the local charm of Rishikesh with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1358,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Stunning Stay in Mahabaleshwar",
    description:
      "Explore the local charm of Mahabaleshwar with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1579609424835-16beba97e3c2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1370,
    location: "Mahabaleshwar",
    country: "India",
  },
  {
    title: "Stunning Stay in Alibaug",
    description:
      "Explore the local charm of Alibaug with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1716390811488-bfa81474c2c1?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1382,
    location: "Alibaug",
    country: "India",
  },
  {
    title: "Stunning Stay in Kodaikanal",
    description:
      "Explore the local charm of Kodaikanal with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1593692716621-1e228b0a9224?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1394,
    location: "Kodaikanal",
    country: "India",
  },
  {
    title: "Stunning Stay in Madurai",
    description:
      "Explore the local charm of Madurai with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1552629276-87558f74ddf8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1406,
    location: "Madurai",
    country: "India",
  },
  {
    title: "Stunning Stay in Tirupati",
    description:
      "Explore the local charm of Tirupati with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1709389137241-af48d39f8b46?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1418,
    location: "Tirupati",
    country: "India",
  },
  {
    title: "Stunning Stay in Ayodhya",
    description:
      "Explore the local charm of Ayodhya with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730334768-6e65fa8fded0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1430,
    location: "Ayodhya",
    country: "India",
  },
  {
    title: "Stunning Stay in Haridwar",
    description:
      "Explore the local charm of Haridwar with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1442,
    location: "Haridwar",
    country: "India",
  },
  {
    title: "Stunning Stay in Puri",
    description:
      "Explore the local charm of Puri with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1454,
    location: "Puri",
    country: "India",
  },
  {
    title: "Stunning Stay in Gangtok",
    description:
      "Explore the local charm of Gangtok with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1635346537940-9d51faeb6e32?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1466,
    location: "Gangtok",
    country: "India",
  },
  {
    title: "Stunning Stay in Khajuraho",
    description:
      "Explore the local charm of Khajuraho with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1478,
    location: "Khajuraho",
    country: "India",
  },
  {
    title: "Stunning Stay in McLeodGanj",
    description:
      "Explore the local charm of McLeodGanj with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1649951692609-cfb7f753b356?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1490,
    location: "McLeodGanj",
    country: "India",
  },
  {
    title: "Stunning Stay in Mount Abu",
    description:
      "Explore the local charm of Mount Abu with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1630825828081-e80577f6e2df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1502,
    location: "Mount Abu",
    country: "India",
  },
  {
    title: "Stunning Stay in Gokarna",
    description:
      "Explore the local charm of Gokarna with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1554787990-fd7a431e3b0a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1514,
    location: "Gokarna",
    country: "India",
  },
  {
    title: "Stunning Stay in Nashik",
    description:
      "Explore the local charm of Nashik with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1694667509674-676629c9d069?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1526,
    location: "Nashik",
    country: "India",
  },
  {
    title: "Stunning Stay in Mahabalipuram",
    description:
      "Explore the local charm of Mahabalipuram with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1717425137864-8598dab00307?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1538,
    location: "Mahabalipuram",
    country: "India",
  },
  {
    title: "Stunning Stay in Shillong",
    description:
      "Explore the local charm of Shillong with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1623751814896-dc6f8d237165?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1550,
    location: "Shillong",
    country: "India",
  },
  {
    title: "Stunning Stay in Rishikesh",
    description:
      "Explore the local charm of Rishikesh with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1720819029162-8500607ae232?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1562,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Stunning Stay in Mahabaleshwar",
    description:
      "Explore the local charm of Mahabaleshwar with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1574323109400-7477368b7b03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1574,
    location: "Mahabaleshwar",
    country: "India",
  },
  {
    title: "Stunning Stay in Alibaug",
    description:
      "Explore the local charm of Alibaug with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1574159642881-f2fb68370ad6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1586,
    location: "Alibaug",
    country: "India",
  },
  {
    title: "Stunning Stay in Kodaikanal",
    description:
      "Explore the local charm of Kodaikanal with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1692792284356-f80113facd09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1598,
    location: "Kodaikanal",
    country: "India",
  },
  {
    title: "Stunning Stay in Madurai",
    description:
      "Explore the local charm of Madurai with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1692173248120-59547c3d4653?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1610,
    location: "Madurai",
    country: "India",
  },
  {
    title: "Stunning Stay in Tirupati",
    description:
      "Explore the local charm of Tirupati with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1675071830753-595b5e67bb88?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1622,
    location: "Tirupati",
    country: "India",
  },
  {
    title: "Stunning Stay in Agra",
    description:
      "Explore the local charm of Agra with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1634,
    location: "Agra",
    country: "India",
  },
  {
    title: "Stunning Stay in Amritsar",
    description:
      "Explore the local charm of Amritsar with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1646,
    location: "Amritsar",
    country: "India",
  },
  {
    title: "Stunning Stay in Nainital",
    description:
      "Explore the local charm of Nainital with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1653897242485-bb411cfe28c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1658,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Stunning Stay in Paris",
    description:
      "Explore the local charm of Paris with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1666283181610-b95ee7e55465?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1670,
    location: "Paris",
    country: "France",
  },
  {
    title: "Stunning Stay in London",
    description:
      "Explore the local charm of London with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1682,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Stunning Stay in Tokyo",
    description:
      "Explore the local charm of Tokyo with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1694,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Stunning Stay in New York",
    description:
      "Explore the local charm of New York with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1706,
    location: "New York",
    country: "United States",
  },
  {
    title: "Stunning Stay in Sydney",
    description:
      "Explore the local charm of Sydney with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1718,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Stunning Stay in Rome",
    description:
      "Explore the local charm of Rome with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1730,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Stunning Stay in Barcelona",
    description:
      "Explore the local charm of Barcelona with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1742,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Stunning Stay in Berlin",
    description:
      "Explore the local charm of Berlin with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1754,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Stunning Stay in Cape Town",
    description:
      "Explore the local charm of Cape Town with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1766,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Stunning Stay in Dubai",
    description:
      "Explore the local charm of Dubai with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1778,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Stunning Stay in Bali",
    description:
      "Explore the local charm of Bali with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1661878915254-f3163e91d870?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1790,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Stunning Stay in Vienna",
    description:
      "Explore the local charm of Vienna with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: 1802,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Stunning Stay in Prague",
    description:
      "Explore the local charm of Prague with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963067279-2f7bf970c49c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJhZ3VlfGVufDB8fDB8fHww",

    price: 1814,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Stunning Stay in Amsterdam",
    description:
      "Explore the local charm of Amsterdam with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1826,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Stunning Stay in Moscow",
    description:
      "Explore the local charm of Moscow with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1838,
    location: "Moscow",
    country: "Russia",
  },
  {
    title: "Stunning Stay in Lisbon",
    description:
      "Explore the local charm of Lisbon with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1850,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Stunning Stay in Athens",
    description:
      "Explore the local charm of Athens with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1862,
    location: "Athens",
    country: "Greece",
  },
  {
    title: "Stunning Stay in Rio de Janeiro",
    description:
      "Explore the local charm of Rio de Janeiro with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1874,
    location: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    title: "Stunning Stay in Seoul",
    description:
      "Explore the local charm of Seoul with this comfortable and stylish property.",
    image:
      "https://plus.unsplash.com/premium_photo-1661885493074-e18964497278?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1886,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Stunning Stay in Santorini",
    description:
      "Explore the local charm of Santorini with this comfortable and stylish property.",
    image:
      "https://images.unsplash.com/photo-1678266561093-324802646fb2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1898,
    location: "Santorini",
    country: "Greece",
  },
];

module.exports = { data: sampleListings };
