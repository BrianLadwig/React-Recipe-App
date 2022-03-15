import { useContext, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import "./Filter.css";

export default function Filter() {
  const { cat, setCat } = useContext(FilterContext);

  function changeHandler(str) {
    setCat({ ...cat, [str]: !cat[str] });
  }

  return (
    <div className="Filter">
      <p>Filter</p>
      <p>Categories:</p>
      <input
        type="checkbox"
        name="Breakfast"
        checked={cat["breakfast"] === true}
        onChange={() => changeHandler("breakfast")}
      />
      <label>Breakfast</label>
      <input
        type="checkbox"
        name="Meal"
        checked={cat["meal"] === true}
        onChange={() => changeHandler("meal")}
      />
      <label>Meal</label>
      <input
        type="checkbox"
        name="Snack"
        checked={cat["snack"] === true}
        onChange={() => changeHandler("snack")}
      />
      <label>Snack</label>
    </div>
  );
}
