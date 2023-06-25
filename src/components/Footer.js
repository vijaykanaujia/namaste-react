import { useContext } from "react";
import UserContext from "../Utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div id="footer">
      &copy; ThoughtSole ({user.name}: {user.email})
    </div>
  );
};

export default Footer;
