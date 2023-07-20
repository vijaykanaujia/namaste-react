import { useState, useEffect, useContext } from "react";
import restaurentList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurentList);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 You Are Offline Please check your internet connection!</h1>;
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
            data-testid="search-input"
          />
          <button
            id="searchButton"
            type="button"
            data-testid="search-btn"
            onClick={() => {
              setFilteredRestaurant(filterData(searchText, allRestaurants));
            }}
          >
            Filter
          </button>
          <input
            type="text"
            value={user.name}
            name="nam"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
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
      <div id="restaurent_card_container" data-testid="res-list">
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
