import { UserProvider } from "./context/UserContext..jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Sidebar />
      <Profile />
    </UserProvider>
  );
}

export default App;
