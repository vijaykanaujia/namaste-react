const RestaurantCard = (props) => {
  const { name, thumbnailUrl, rating, cuisines, costForTwo, deliveryTime } =
    props.restaurents;
  return (
    <div className="res-card">
      <img src={thumbnailUrl} />
      <h3>{name}</h3>
      <p>⭐ {rating}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo / 100} cost for Two</p>
      <p>delivery in {deliveryTime} min</p>
    </div>
  );
};

export default RestaurantCard;
