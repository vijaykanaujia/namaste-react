import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

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
          <li className="menu-item">Home</li>
          <li className="menu-item">Item</li>
          <li className="menu-item">Contact Us</li>
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
