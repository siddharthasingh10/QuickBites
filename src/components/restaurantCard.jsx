
function RestaurantCard(props) {
  const{name,cuisine,avgRating,image}=props;

    return (
   <div className='card'>
            <img src={image} alt={name} className="restaurant-image" />
            <h2 className="restaurant-name">{name}</h2>
            <h3 className="restaurant-cuisine">{cuisine}</h3>
            <h4 className="restaurant-rating">{avgRating} stars</h4>
        </div>
    );
  }
  export default RestaurantCard; 