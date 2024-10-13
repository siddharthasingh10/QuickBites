
function RestaurantCard(props) {
  const{name,cuisine,avgRating,image}=props;

    return (
      <div className='card'>
    
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>{cuisine}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  }
  export default RestaurantCard; 