import { NavLink } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";
import { useContext } from "react";




export default function Categories(){

const {cat,setCat} = useContext(FilterContext)




function clickHandler(str){
   setCat(str)
}
console.log('from Categories Cat:',cat);
    return(
        <div className="categories">
              <NavLink onClick={()=>clickHandler('breakfast')} to="/recipes">Breakfast</NavLink>|
              <NavLink onClick={()=>clickHandler('meal')} to="/recipes">Meal</NavLink>|
              <NavLink onClick={()=>clickHandler('snack')} to="/recipes">Snack</NavLink>
        </div>
    )
}