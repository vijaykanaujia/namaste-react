const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, deliveryTime } =
    props.restaurents.data;
  return (
    <div className="res-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h3>{name}</h3>
      <p>⭐ {avgRating}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo / 100} cost for Two</p>
      <p>delivery in {deliveryTime} min</p>
    </div>
  );
};

export default RestaurantCard;
