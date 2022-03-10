import { NavLink } from "react-router-dom";
import arrayOfRecipes from "../data.js";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext.js";
import Filter from "./Filter"

export default function Recipes() {
    const {cat} = useContext(FilterContext)

    console.log('cat:',cat);


  return (
    <div className="recipes">
      {arrayOfRecipes
        .filter((item) => cat? item.category === cat: true)
        .map((recipe) => (
          <div key={recipe.id}>
            <NavLink to={recipe.id + ""}>{recipe.name}</NavLink>
            
          </div>
        ))}
        <Filter/>
    </div>
  );
}
