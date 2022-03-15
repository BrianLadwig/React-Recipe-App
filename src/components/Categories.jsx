import { NavLink } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";
import { useContext } from "react";
import "./Categories.css";
import styled from "styled-components";




export default function Categories() {
  const { cat } = useContext(FilterContext);

  function clickHandler(str) {
    //    setCat(str)
    cat[str] = !cat[str];
  }
  
  return (
    <div className="Categories">
      <NavLink onClick={() => clickHandler("breakfast")} to="/recipes">
        <div className="categories breakfast"><p>Breakfast</p></div>
      </NavLink>
      <NavLink onClick={() => clickHandler("meal")} to="/recipes">
        {" "}
        <div className="categories meal"><p>Meal</p></div>
      </NavLink>
      <NavLink onClick={() => clickHandler("snack")} to="/recipes">
        {" "}
        <div className="categories snack"><p>Snack</p></div>
      </NavLink>
    </div>
  );
}
