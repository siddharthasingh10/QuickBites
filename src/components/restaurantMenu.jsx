import React, { useEffect, useState } from 'react';
import { detailedData } from "./../constant";
import { useParams } from 'react-router-dom';


const findRestaurantById = async (id) => {
    const obj = detailedData.find(restaurant => restaurant.id === id);
    return obj;
};

function RestaurantMenu() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        fetchedRestaurant();
    }, []);

    async function fetchedRestaurant() {
        const restaurantId = parseInt(id, 10);
        const fetchedData = await findRestaurantById(restaurantId);
        setRestaurant(fetchedData);
    }

    if (!restaurant) {
        return <div className="loading-text">Loading...</div>;
    }

    return (
        <div className="restaurant-info-container">
        <div className="restaurant-image">
            <img src={restaurant.image} alt={restaurant.name} className="image" />
        </div>
        <div className="restaurant-details">
            <h1 className="restaurant-name">{restaurant.name}</h1>
            <p className="restaurant-cuisine">Cuisine: {restaurant.cuisine}</p>
            <p className="restaurant-rating">Average Rating: {restaurant.rating} </p>
            <p className="restaurant-address">
                Address: {restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state} {restaurant.address.postalCode}, {restaurant.address.country}
            </p>
            <button className="checkout-button">Checkout</button>
        </div>
    </div>
    );
}

export default RestaurantMenu;
