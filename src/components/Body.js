import restaurentList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div id="search_bar">
        <input type="search" placeholder="Search Restaurent" name="searchbar" />
      </div>
      <div id="restaurent_card_container">
        { restaurentList.map((restaurents) => {
          return (
            <RestaurantCard key={restaurents.id} restaurents={restaurents} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
