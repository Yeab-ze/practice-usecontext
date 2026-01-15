import { useContext } from "react";
import { UserContext } from "../context/UserContext.";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const updateName = () => {
    setUser({ ...user, name: "Zelam Tech" });
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>

      <button onClick={updateName}>
        Change Name
      </button>
    </div>
  );
};

export default Profile;
