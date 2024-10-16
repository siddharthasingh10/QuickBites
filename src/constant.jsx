
 
 export const data = [
    {
      id: 1,
      name: "Burger King",
      cuisine: "Burgers, American",
      rating: "4.4",
      image: "https://b.zmtcdn.com/data/pictures/chains/5/19136795/c8008523810583087401ff292c1763a3.jpg?fit=around|960:500&crop=960:500;*,*"  // Burger image
    },
    {
      id: 2,
      name: "Pizza Hut",
      cuisine: "Pizza, Italian",
      rating: "4.2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVYBcOcFWBnaPJHkdecQID8-CS3w8PaOR8A&s"  // Cloudinary image
    },
    {
      id: 3,
      name: "Starbucks",
      cuisine: "Coffee, Snacks",
      rating: "4.5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGyDicUmTyIc3JaMgIOSR1s8y-BoO6tyCFw&s"  // Cloudinary image
    },
    {
      id: 4,
      name: "Subway",
      cuisine: "Healthy, Sandwiches",
      rating: "4.3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsy1K3sjeZMPmSJf2gg-_kuI58zKaEFk9JA&s"  // Cloudinary image
    },
    {
      id: 5,
      name: "Domino's Pizza",
      cuisine: "Pizza, Fast Food",
      rating: "4.1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUKW1Wo4O6qBFGdD8klTfuXstxJVqQ-hvTw&s"  // Cloudinary image
    },
    {
      id: 6,
      name: "KFC",
      cuisine: "Fried Chicken, Fast Food",
      rating: "4.0",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdO2Bry56XyA8FHJsUfMb3wBJlJiCTgLz_g&s" // Cloudinary image
    },
   
  ];
  
  
  export const detailedData = [
    {
      id: 1,
      name: "Burger King",
      cuisine: "Burgers, American",
      rating: "4.4",
      image: "https://b.zmtcdn.com/data/pictures/chains/5/19136795/c8008523810583087401ff292c1763a3.jpg?fit=around|960:500&crop=960:500;*,*",
      address: {
        street: "123 King Street",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        country: "USA"
      },
      contact: {
        phone: "+1 (555) 123-4567",
        email: "contact@burgerking.com",
        website: "https://www.burgerking.com"
      },
      openingHours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 10:00 PM",
        saturday: "9:00 AM - 10:00 PM",
        sunday: "10:00 AM - 8:00 PM"
      },
      menu: [
        { item: "Whopper", price: "$4.99", description: "Flame-grilled beef patty with toppings." },
        { item: "Chicken Fries", price: "$3.99", description: "Tender crispy chicken strips." },
        { item: "French Fries", price: "$2.49", description: "Golden crispy fries." }
      ],
      reviews: [
        { username: "JohnDoe123", rating: 5, comment: "Best burgers ever!" },
        { username: "JaneSmith87", rating: 4, comment: "Great food, service was a bit slow." }
      ],
      services: { dineIn: true, takeAway: true, delivery: true, driveThrough: true },
      paymentMethods: ["Cash", "Credit Card", "Debit Card", "Mobile Payments"]
    },
    {
      id: 2,
      name: "Pizza Hut",
      cuisine: "Pizza, Italian",
      rating: "4.2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVYBcOcFWBnaPJHkdecQID8-CS3w8PaOR8A&s",
      address: {
        street: "456 Pizza Avenue",
        city: "Chicago",
        state: "IL",
        postalCode: "60601",
        country: "USA"
      },
      contact: {
        phone: "+1 (555) 234-5678",
        email: "contact@pizzahut.com",
        website: "https://www.pizzahut.com"
      },
      openingHours: {
        monday: "10:00 AM - 10:00 PM",
        tuesday: "10:00 AM - 10:00 PM",
        wednesday: "10:00 AM - 10:00 PM",
        thursday: "10:00 AM - 10:00 PM",
        friday: "10:00 AM - 11:00 PM",
        saturday: "10:00 AM - 11:00 PM",
        sunday: "11:00 AM - 9:00 PM"
      },
      menu: [
        { item: "Pepperoni Pizza", price: "$10.99", description: "Classic pizza with pepperoni." },
        { item: "Cheese Pizza", price: "$9.99", description: "Pizza with a blend of cheeses." },
        { item: "Garlic Breadsticks", price: "$4.99", description: "Crispy garlic breadsticks." }
      ],
      reviews: [
        { username: "PizzaLover", rating: 5, comment: "Amazing pizza and fast service!" },
        { username: "FoodieGirl", rating: 4.5, comment: "Loved the breadsticks!" }
      ],
      services: { dineIn: true, takeAway: true, delivery: true, driveThrough: false },
      paymentMethods: ["Cash", "Credit Card", "Debit Card", "Mobile Payments"]
    },
    {
      id: 3,
      name: "Starbucks",
      cuisine: "Coffee, Snacks",
      rating: "4.5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGyDicUmTyIc3JaMgIOSR1s8y-BoO6tyCFw&s",
      address: {
        street: "789 Coffee Lane",
        city: "Seattle",
        state: "WA",
        postalCode: "98101",
        country: "USA"
      },
      contact: {
        phone: "+1 (555) 345-6789",
        email: "contact@starbucks.com",
        website: "https://www.starbucks.com"
      },
      openingHours: {
        monday: "6:00 AM - 9:00 PM",
        tuesday: "6:00 AM - 9:00 PM",
        wednesday: "6:00 AM - 9:00 PM",
        thursday: "6:00 AM - 9:00 PM",
        friday: "6:00 AM - 10:00 PM",
        saturday: "6:00 AM - 10:00 PM",
        sunday: "7:00 AM - 8:00 PM"
      },
      menu: [
        { item: "Cappuccino", price: "$3.99", description: "Rich espresso with frothy milk." },
        { item: "Frappuccino", price: "$4.99", description: "Blended coffee with ice and toppings." },
        { item: "Blueberry Muffin", price: "$2.99", description: "Moist muffin with blueberries." }
      ],
      reviews: [
        { username: "CoffeeAddict", rating: 5, comment: "Best coffee ever!" },
        { username: "MuffinFan", rating: 4, comment: "Loved the muffins, fresh and tasty." }
      ],
      services: { dineIn: true, takeAway: true, delivery: false, driveThrough: true },
      paymentMethods: ["Cash", "Credit Card", "Mobile Payments"]
    },
    {
      id: 4,
      name: "Subway",
      cuisine: "Healthy, Sandwiches",
      rating: "4.3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdO2Bry56XyA8FHJsUfMb3wBJlJiCTgLz_g&s",
      address: {
        street: "101 Sandwich St.",
        city: "Los Angeles",
        state: "CA",
        postalCode: "90001",
        country: "USA"
      },
      contact: {
        phone: "+1 (555) 456-7890",
        email: "contact@subway.com",
        website: "https://www.subway.com"
      },
      openingHours: {
        monday: "8:00 AM - 9:00 PM",
        tuesday: "8:00 AM - 9:00 PM",
        wednesday: "8:00 AM - 9:00 PM",
        thursday: "8:00 AM - 9:00 PM",
        friday: "8:00 AM - 10:00 PM",
        saturday: "8:00 AM - 10:00 PM",
        sunday: "9:00 AM - 8:00 PM"
      },
      menu: [
        { item: "Turkey Sandwich", price: "$5.99", description: "Fresh turkey with veggies." },
        { item: "Veggie Delight", price: "$4.99", description: "All the veggies on whole grain." },
        { item: "Chicken Teriyaki", price: "$6.49", description: "Grilled chicken with teriyaki sauce." }
      ],
      reviews: [
        { username: "HealthyEater", rating: 5, comment: "Best healthy options around!" },
        { username: "SandwichLover", rating: 4.5, comment: "Fresh ingredients and great taste." }
      ],
      services: { dineIn: true, takeAway: true, delivery: true, driveThrough: false },
      paymentMethods: ["Cash", "Credit Card", "Debit Card", "Mobile Payments"]
    },
    {
      id: 5,
      name: "Domino's Pizza",
      cuisine: "Pizza, Fast Food",
      rating: "4.1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUKW1Wo4O6qBFGdD8klTfuXstxJVqQ-hvTw&s",
      address: {
        street: "234 Slice Road",
        city: "Miami",
        state: "FL",
        postalCode: "33101",
        country: "USA"
      },
      contact: {
        phone: "+1 (555) 567-8901",
        email: "contact@dominos.com",
        website: "https://www.dominos.com"
      },
      openingHours: {
        monday: "10:00 AM - 11:00 PM",
        tuesday: "10:00 AM - 11:00 PM",
        wednesday: "10:00 AM - 11:00 PM",
        thursday: "10:00 AM - 11:00 PM",
        friday: "10:00 AM - 12:00 AM",
        saturday: "10:00 AM - 12:00 AM",
        sunday: "11:00 AM - 10:00 PM"
      },
      menu: [
        { item: "Pepperoni Pizza", price: "$9.99", description: "Classic pepperoni on a crispy crust." },
        { item: "Buffalo Wings", price: "$7.99", description: "Spicy buffalo wings with ranch." },
        { item: "Cinna Stix", price: "$4.99", description: "Sweet cinnamon breadsticks." }
      ],
      reviews: [
        { username: "PizzaFan", rating: 4, comment: "Great pizza, fast delivery!" },
        { username: "WingLover", rating: 4.5, comment: "Buffalo wings are a must-try." }
      ],
      services: { dineIn: true, takeAway: true, delivery: true, driveThrough: false },
      paymentMethods: ["Cash", "Credit Card", "Debit Card", "Mobile Payments"]
    },
    {
      id: 6,
      name: "KFC",
      cuisine: "Fried Chicken, Fast Food",
      rating: "4.0",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdO2Bry56XyA8FHJsUfMb3wBJlJiCTgLz_g&s",
      address: {
          street: "456 Colonel's Lane",
          city: "Los Angeles",
          state: "CA",
          postalCode: "90001",
          country: "USA"
      },
      contact: {
          phone: "+1 (555) 987-6543",
          email: "contact@kfc.com",
          website: "https://www.kfc.com"
      },
      openingHours: {
          monday: "10:00 AM - 11:00 PM",
          tuesday: "10:00 AM - 11:00 PM",
          wednesday: "10:00 AM - 11:00 PM",
          thursday: "10:00 AM - 11:00 PM",
          friday: "10:00 AM - 12:00 AM",
          saturday: "10:00 AM - 12:00 AM",
          sunday: "10:00 AM - 10:00 PM"
      },
      menu: [
          { item: "Original Recipe Chicken", price: "$5.99", description: "Signature fried chicken, seasoned with a secret blend of 11 herbs and spices." },
          { item: "Chicken Sandwich", price: "$4.99", description: "Juicy fried chicken breast served on a toasted bun." },
          { item: "Popcorn Chicken", price: "$3.99", description: "Crispy, bite-sized pieces of chicken." },
          { item: "Mashed Potatoes with Gravy", price: "$2.49", description: "Creamy mashed potatoes topped with rich gravy." },
          { item: "Cole Slaw", price: "$1.99", description: "Freshly prepared coleslaw with a creamy dressing." }
      ],
      reviews: [
          { username: "ChickenLover2023", rating: 5, comment: "Best fried chicken in town! Always crispy and delicious." },
          { username: "FastFoodFan89", rating: 4, comment: "Great place for a quick meal. The service could be faster." },
          { username: "KFCAddict", rating: 4, comment: "Love their original recipe! A bit pricey, but worth it." }
      ],
      services: {
          dineIn: true,
          takeAway: true,
          delivery: true,
          driveThrough: true
      },
      paymentMethods: ["Cash", "Credit Card", "Debit Card", "Mobile Payments"]
  }
  
  ];
  