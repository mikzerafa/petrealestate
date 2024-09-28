import React from 'react';
import '../css/RestaurantList.css';  // Import the external CSS file

interface Restaurant {
  name: string;
  location: string;
  cuisine: string;
  description: string;
}

const restaurants: Restaurant[] = [
  {
    name: "Giuseppi's Bar & Bistro",
    location: "Salini Resort",
    cuisine: "Local & Italian",
    description:
      "A well-established restaurant offering a cozy atmosphere for you and your pet, with local and Italian-inspired dishes.",
  },
  {
    name: "La Nave Bistro",
    location: "Bugibba",
    cuisine: "Mediterranean",
    description:
      "Enjoy brunch and Mediterranean dishes with beautiful sea views. Pets are more than welcome here.",
  },
  {
    name: "Briju",
    location: "Gzira",
    cuisine: "Maltese & Mediterranean",
    description:
      "A modern, pet-friendly restaurant known for its fine Maltese and Mediterranean cuisine.",
  },
  {
    name: "Planet Hollywood",
    location: "Baystreet Complex",
    cuisine: "American Diner",
    description:
      "An American diner offering a special doggie menu so you can enjoy a meal with your pet.",
  },
  {
    name: "Fontanella Tea Garden",
    location: "Mdina",
    cuisine: "Desserts & Coffee",
    description:
      "Famous for its cakes and stunning views, Fontanella is perfect for a pet-friendly day out.",
  },
  {
    name: "Tapea",
    location: "St. Julian's",
    cuisine: "Spanish",
    description:
      "A casual Spanish eatery in the heart of St. Julian's where your pet is welcome to join.",
  },
  {
    name: "Pepe Nero",
    location: "St. Paul’s Bay",
    cuisine: "Italian",
    description:
      "Sit by the sea, enjoy pizza, and watch the sunset while your pet relaxes by your side.",
  },
  {
    name: "Xerri il-Bukkett",
    location: "Mgarr, Gozo",
    cuisine: "Maltese",
    description:
      "Offering breathtaking views of Comino while enjoying a pet-friendly meal with drinks.",
  },
  {
    name: "NAAR Restobar",
    location: "St. Julian’s",
    cuisine: "Modern Mediterranean",
    description:
      "NAAR is a trendy restobar featuring a gourmet dog menu, including treats like peanut butter and banana bites.",
  },
  {
    name: "Avotaco",
    location: "Ta' Xbiex",
    cuisine: "Mexican",
    description:
      "Avotaco serves delicious Mexican food and welcomes pets to enjoy a casual, vibrant environment.",
  },
  {
    name: "New York Best",
    location: "Various Locations",
    cuisine: "American Diner",
    description:
      "New York Best offers hearty American food and is known for welcoming dogs across its various locations.",
  }
]


const get = {
  RestaurantList: () => {
    return (
      <div className="container">
        <h1 className="title">Pet-Friendly Restaurants in Malta</h1>
        <ul className="list">
          {restaurants.map((restaurant, index) => (
            <li key={index} className="item">
              <h2 className="name">{restaurant.name}</h2>
              <p className="location">Location: {restaurant.location}</p>
              <p className="cuisine">Cuisine: {restaurant.cuisine}</p>
              <p className="description">{restaurant.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


const RestaurantList: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Pet-Friendly Restaurants in Malta</h1>
      <ul className="list">
        {restaurants.map((restaurant, index) => (
          <li key={index} className="item">
            <h2 className="name">{restaurant.name}</h2>
            <p className="location">Location: {restaurant.location}</p>
            <p className="cuisine">Cuisine: {restaurant.cuisine}</p>
            <p className="description">{restaurant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default get
