import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);

  return (
    <div>
      <h2>{restaurant?.name}</h2>
    </div>
  );
};

export default RestaurantMenu;
