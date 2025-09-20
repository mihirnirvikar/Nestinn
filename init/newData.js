const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Unplug and unwind in this cozy mountain cabin surrounded by scenic views and fresh air.",
    image: {
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Enjoy the city life in this sleek apartment located in the heart of downtown.",
    image: {
      url: "https://images.unsplash.com/photo-1635933036183-d1f250072745?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1000,
    location: "New York",
    country: "United States",
  },
  {
    title: "Charming Countryside Home",
    description:
      "Relax in this peaceful countryside home with a large garden and farm views.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 900,
    location: "Somerset",
    country: "United Kingdom",
  },
  {
    title: "Rustic Forest Lodge",
    description:
      "Get close to nature in this rustic lodge surrounded by towering pines.",
    image: {
      url: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1100,
    location: "British Columbia",
    country: "Canada",
  },
  {
    title: "Elegant Paris Flat",
    description:
      "Live the Parisian dream in this elegant flat with balcony views of the Eiffel Tower.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1718285552468-87a89ecd1523?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 2000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Beachside Bungalow",
    description:
      "Step outside onto the sand from this cozy beachside bungalow.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1300,
    location: "Goa",
    country: "India",
  },
  {
    title: "Historic Stone Cottage",
    description:
      "Stay in this charming stone cottage with historic touches and modern comforts.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1694475477920-8064c7783ed9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 800,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Desert Dome Stay",
    description:
      "Experience the desert in a unique dome home with panoramic views of the sand dunes.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1731393139788-e93bbe83d01e?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 950,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Tropical Jungle Villa",
    description:
      "Surround yourself with lush greenery in this luxury villa hidden in the jungle.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1700,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Coastal Spanish Home",
    description:
      "Enjoy ocean breezes in this beautiful home on the Spanish coast.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1400,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Modern Tokyo Studio",
    description:
      "Compact and stylish studio in the heart of Tokyo's vibrant cityscape.",
    image: {
      url: "https://images.unsplash.com/photo-1560409471-ef52158a63fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Icelandic Retreat Cabin",
    description:
      "Escape to nature in this warm wooden cabin with geothermal spa access nearby.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1669223464660-08f06bffabc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1250,
    location: "Reykjavík",
    country: "Iceland",
  },
  {
    title: "Greek Island Hideaway",
    description:
      "Whitewashed beauty in a peaceful Greek island village, perfect for sunsets.",
    image: {
      url: "https://images.unsplash.com/photo-1752668223248-f49e9c042c23?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1600,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Swiss Alps Chalet",
    description:
      "Warm and elegant chalet with snow-capped views and ski-in/ski-out access.",
    image: {
      url: "https://images.unsplash.com/photo-1706172314716-a885f31a04d6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 2100,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Secluded Scandinavian Cabin",
    description:
      "Minimal and serene Nordic cabin with forest surroundings and lake nearby.",
    image: {
      url: "https://images.unsplash.com/photo-1708630283447-11c0a9936c1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1000,
    location: "Lofoten",
    country: "Norway",
  },
  {
    title: "Luxury Dubai Apartment",
    description:
      "Stay high above the city with luxury amenities and skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1728486885278-305bad7cfd15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 2500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Rainforest Treehouse",
    description:
      "Sleep among the treetops in this handcrafted wooden treehouse deep in the rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1350,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Amsterdam Canal House",
    description:
      "Historic canal-side home with charming interiors and water views.",
    image: {
      url: "https://images.unsplash.com/photo-1534203137048-137aa03c692e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1550,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Colorful Havana Flat",
    description:
      "Lively and colorful apartment in the heart of historic Havana streets.",
    image: {
      url: "https://images.unsplash.com/photo-1528273616809-a032a10474d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 850,
    location: "Havana",
    country: "Cuba",
  },
  {
    title: "Lakeside Wooden Retreat",
    description:
      "Wake up to the sound of water lapping at the shore in this peaceful lakeside cabin.",
    image: {
      url: "https://images.unsplash.com/photo-1696963589690-67326f721188?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 950,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Sunny Rooftop Loft",
    description:
      "This bright and airy loft offers rooftop views and cozy modern interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1300,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Countryside Farm Stay",
    description:
      "Experience authentic farm life surrounded by rolling hills and open skies.",
    image: {
      url: "https://images.unsplash.com/photo-1708254837326-8cd56e4fad41?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 800,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Vintage NYC Brownstone",
    description:
      "Stay in style with this charming vintage brownstone in the heart of Brooklyn.",
    image: {
      url: "https://images.unsplash.com/photo-1661776351969-1011dbba7561?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1800,
    location: "Brooklyn",
    country: "United States",
  },
  {
    title: "Traditional Kyoto Ryokan",
    description:
      "Enjoy tatami floors, futon beds, and hot baths in this traditional Japanese inn.",
    image: {
      url: "https://images.unsplash.com/photo-1738676721795-a8435cdb5f48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1250,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Ocean Cliff Villa",
    description:
      "Panoramic ocean views and luxury await you on the cliffs of this private villa.",
    image: {
      url: "https://images.unsplash.com/photo-1744591571294-b9cba925a3b6?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 2200,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Hidden Jungle Bungalow",
    description:
      "Tucked into the greenery, this private jungle bungalow is perfect for unplugging.",
    image: {
      url: "https://images.unsplash.com/photo-1568402102889-8307563f757f?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 950,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Snowy Alpine Getaway",
    description:
      "Stay cozy and warm inside while snowflakes dance outside your window.",
    image: {
      url: "https://images.unsplash.com/photo-1738599778461-2f2f81bcdd02?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1900,
    location: "Innsbruck",
    country: "Austria",
  },
  {
    title: "Beach Hut Bliss",
    description:
      "Colorful beach hut just steps from turquoise waters and golden sands.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1694475574403-d24268584350?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 850,
    location: "Boracay",
    country: "Philippines",
  },
  {
    title: "Artistic Bohemian Loft",
    description:
      "A creative dream — full of color, charm, and vintage finds in every corner.",
    image: {
      url: "https://images.unsplash.com/photo-1680465496059-bfc63eb070f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1350,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Wilderness A-Frame Cabin",
    description:
      "Iconic A-frame surrounded by thick woods — pure peace and quiet.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
      filename: "listing",
    },
    price: 1050,
    location: "Maine",
    country: "United States",
  },
  {
    title: "Private Island Paradise",
    description:
      "Live the dream on your own private island villa with crystal clear waters.",
    image: {
      url: "https://images.unsplash.com/photo-1729708790880-ccd1c603525c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 5000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Riverside Scandinavian Retreat",
    description:
      "Simple luxury on the river — minimal design with maximum comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1731918314046-8f221a73ace5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1200,
    location: "Stockholm",
    country: "Sweden",
  },
  {
    title: "Sahara Desert Camp",
    description:
      "Adventure meets comfort in this unique desert glamping experience.",
    image: {
      url: "https://images.unsplash.com/photo-1667143296510-6b35a8a356d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 900,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Peaceful Hilltop Homestay",
    description:
      "Watch the clouds drift below from this charming hilltop retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1743936937349-cc25fd691905?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing",
    },
    price: 1100,
    location: "Shimla",
    country: "India",
  },
];

module.exports = { data: sampleListings };
