import { useContext, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";

export default function Filter() {
  const { cat, setCat } = useContext(FilterContext);
  const [checked, setChecked] = useState({breakfast:false,meal:false,snack:false});

  function changeHandler(str) {
    checked[str] = !checked[str]
    setCat(str);
    console.log(checked);
  }

  return (
    <div className="Filter">
      <input
        type="checkbox"
        name="Breakfast"
        onChange={() => changeHandler("breakfast")}
      />
      <label>Breakfast</label>
      <input
        type="checkbox"
        name="Meal"
        onChange={() => changeHandler("meal")}
      />
      <label>Meal</label>
      <input
        type="checkbox"
        name="Snack"
        onChange={() => changeHandler("snack")}
      />
      <label>Snack</label>
    </div>
  );
}
