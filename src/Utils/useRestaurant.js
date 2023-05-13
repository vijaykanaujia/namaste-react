import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getResturentInfo();
  }, []);

  async function getResturentInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info || {});
  }
  return restaurant;
};

export default useRestaurant;
