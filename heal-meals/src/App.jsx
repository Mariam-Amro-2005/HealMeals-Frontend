import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import HealthProfile from "./pages/HealthProfile";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/health-profile" element={<HealthProfile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
