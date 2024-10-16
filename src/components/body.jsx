import { useState } from "react";
import { data } from "./../constant";
import RestaurantCard from "./restaurantCard";
import { Link } from "react-router-dom";

// Function to filter restaurants based on search input
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchText.toLowerCase())
  );
}

function Body() {
  // State variables
  const [filteredRestaurant, setFilteredRestaurant] = useState(data); // Initially show all data
  const [searchText, setSearchText] = useState(""); // Track input value
  const [allRestaurants, setAllRestaurants] = useState(data); // Store all restaurant data

  // Function to handle search action
  const handleSearch = () => {
    const filteredData = filterData(searchText, allRestaurants); //flter from all restaurant
    setFilteredRestaurant(filteredData); // Update state with filtered data
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search your favorite food or restraunt.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Update search text on input change
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="restaurant">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
         <Link to={`/restaurant/${restaurant.id}`}> <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              image={restaurant.image}
              avgRating={restaurant.rating}
            />
            </Link>  
          ))
        ) : (
          <p className="no-result-found">No Food or Restaurants found.</p> // Message for no results
        )}
      </div>
    </>
  );
}

export default Body;
