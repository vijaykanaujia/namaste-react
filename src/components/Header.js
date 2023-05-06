import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const loggedInUser = () => {
    return true;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div id="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div id="menu_container">
        <ul className="menu">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/about">About</Link></li>
          <li className="menu-item"><Link to="/contact">Contact Us</Link></li>
          <li className="menu-item">Offer</li>
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
      </div>
    </div>
  );
};

export default Header;
