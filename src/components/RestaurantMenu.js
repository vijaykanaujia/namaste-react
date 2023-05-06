import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getResturentInfo();
  }, []);

  async function getResturentInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info || {});
  }

  return (
    <div>
        <h2>{restaurant.name}</h2>
    </div>
  );
};

export default RestaurantMenu;
