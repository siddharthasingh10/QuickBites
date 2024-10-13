import { useEffect, useState } from "react";
import { data } from "./../constant";
import RestaurantCard from "./restaurantCard";

// Filter function to search for restaurants
function filterData(searchText, restaurants) {
  // Use the filter method to get matching results
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchText.toLowerCase())
  );

  return filteredData; // Return the filtered array
}

function Body() {
  const [searchText, setSearchText] = useState(""); // Track input field value
  const [restaurants, setRestaurants] = useState(data); // Store restaurants data

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  // };


  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search your item"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Update state on input change
        />
        <button
          onClick={() => {
            setRestaurants(data);
            // Filter the data based on searchText
            const filteredData = filterData(searchText, restaurants);
            setRestaurants(filteredData); // Update the restaurants state with filtered data
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant">
        {restaurants.map((restaurant) => (


     
   
     <RestaurantCard key={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            image={restaurant.image}

            avgRating={restaurant.avgRating}

          />



        ))
        }
      </div>
    </>
  );
}

export default Body;
