import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import useMenuItem from "../Utils/useMenuItem";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);
  const menuItem = useMenuItem(id);

  const dispatch = useDispatch();
  console.log(menuItem);

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // {payload: "Grapses"}
  };

  return (
    <div>
      <h2>{restaurant?.name}</h2>
      <ul>
        {menuItem &&
          menuItem ?.map((item) => {
            return (
              <li>
                {item.name}{" "}
                <button
                  className="p-2 m-5 bg-green-100"
                  onClick={() => handleAddItem(item)}
                >
                  add item
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
