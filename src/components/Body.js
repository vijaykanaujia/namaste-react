import { useState } from "react";
import restaurentList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurentList);
  return (
    <div className="body">
      <div id="search_bar">
        <input type="search" placeholder="Search Restaurent" name="searchbar" />
      </div>
      <div id="filter_container">
        <button
          onClick={() => {
            const filteredResList = listOfRestaurants.filter(
              (res) => res.rating > 4
            );
            setListOfRestaurants(filteredResList);
          }}
        >Top Rated Restaurants</button>
      </div>
      <div id="restaurent_card_container">
        {listOfRestaurants.map((restaurents) => {
          return (
            <RestaurantCard key={restaurents.id} restaurents={restaurents} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
