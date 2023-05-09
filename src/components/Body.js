import { useState, useEffect } from "react";
import restaurentList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";
import restaurentList from "./../Utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurentList);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterData = (searchText, restaurentList) => {
    const filteredData = restaurentList.filter((res) => {
      return res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    return filteredData;
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards || []);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards || []);
  }

  //not render component (early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div id="search_bar">
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="search"
            value={searchText}
            placeholder="Search Restaurent"
            name="searchbar"
          />
          <button
            id="searchButton"
            type="button"
            onClick={() => {
              setFilteredRestaurant(filterData(searchText, allRestaurants));
            }}
          >
            Filter
          </button>
        </div>
        <div id="filter_container">
          <button
            onClick={() => {
              const filteredResList = allRestaurants.filter(
                (res) => res?.data?.avgRating > 4
              );
              setFilteredRestaurant(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div id="restaurent_card_container">
        {filteredRestaurant.length == 0 ? (
          <h1>No restaurant match your filter!!</h1>
        ) : (
          filteredRestaurant.map((restaurents) => {
            return (
              <RestaurantCard key={restaurents.id} restaurents={restaurents} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
