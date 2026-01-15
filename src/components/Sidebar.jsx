import { useContext } from "react";
import { UserContext } from "../context/UserContext.";

const Sidebar = () => {
  const { user } = useContext(UserContext);

  return (
    <aside>
      <h4>Role: {user.role}</h4>
    </aside>
  );
};

export default Sidebar;
