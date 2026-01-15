import { useContext } from "react";
import { UserContext } from "../context/UserContext.";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <img src={user.avatar} alt="avatar" width="40" />
      <span>Welcome, {user.name}</span>
    </nav>
  );
};

export default Navbar;
