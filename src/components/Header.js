import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const loggedInUser = () => {
    return true;
  };

  const { user } = useContext(UserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div id="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div id="menu_container">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="menu-item">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="menu-item">
            Cart <span>{cartItems.length}</span>
          </li>
        </ul>
        {isLoggedIn ? (
          <button
            className="logout"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="login"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default Header;
