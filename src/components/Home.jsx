import "./Home.css";
import Categories from "./Categories.jsx";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export default function Home() {
  const { setCat } = useContext(FilterContext);

  function clickHandler() {
    setCat({ breakfast: false, meal: false, snack: false });
  }
  return (
    <div className="Home">
      <h2>Dashboard</h2>

      <NavLink className="homeBtn" onClick={clickHandler} to="/favorites">
        <button> Your Favorites</button>
      </NavLink>

      <NavLink className="homeBtn" onClick={clickHandler} to="/favorites">
        <button>Your Recipes</button>
      </NavLink>

      <NavLink className="homeBtn" onClick={clickHandler} to="/recipes">
        <button>Browse All Recipes</button>
      </NavLink>

      <Categories />
    </div>
  );
}
