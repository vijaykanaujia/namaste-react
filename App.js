import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div id="header">
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSU8FA12DS4IhTb9vsaB1tH1QcaAyS_X_YA&usqp=CAU" />
      </div>
      <div id="menu_container">
        <ul className="menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">Item</li>
          <li className="menu-item">Contact Us</li>
          <li className="menu-item">Offer</li>
        </ul>
      </div>
    </div>
  );
};

const FooterComponent = () => {
  return <div id="footer">&copy; ThoughtSole</div>;
};

const RestaurantCard = (props) => {
  console.log(props);
  const { name, thumbnailUrl, rating, cuisines, costForTwo, deliveryTime } =
    props.restaurents;
  return (
    <div className="res-card">
      <img src={thumbnailUrl} />
      <h3>{name}</h3>
      <p>⭐ {rating}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo / 100} cost for Two</p>
      <p>delivery in {deliveryTime} min</p>
    </div>
  );
};

const resturentList = [
  {
    id: 1,
    name: "KFC",
    thumbnailUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hbeotimtlfwmlg68iuca",
    rating: 3.4,
    cuisines: ["Burgers", "American"],
    costForTwo: 40000,
    deliveryTime: 20,
  },
  {
    id: 2,
    name: "KFC",
    thumbnailUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hbeotimtlfwmlg68iuca",
    rating: 3.4,
    cuisines: ["Burgers", "American"],
    costForTwo: 40000,
    deliveryTime: 20,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div id="search_bar">
        <input type="search" placeholder="Search Restaurent" name="searchbar" />
      </div>
      <div id="restaurent_card_container">
        {resturentList.map((restaurents) => {
          return <RestaurantCard key={restaurents.id} restaurents={restaurents} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="container">
      <header>
        <HeaderComponent />
      </header>
      <Body />
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
