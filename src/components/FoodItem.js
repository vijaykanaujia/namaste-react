const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees : {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
