import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Default User", email: "default_user@example.com" },
});

export default UserContext;
