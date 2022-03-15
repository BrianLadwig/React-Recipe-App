import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";

export default function Nav(){

    const {cat,setCat} = useContext(FilterContext)




function clickHandler(str){
   setCat({breakfast:false,meal:false,snack:false})
}
    return(
        <div className="Nav">
           <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink onClick={clickHandler} to="/recipes"> Recipes</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/favorites">favorites</NavLink>
       
        </nav>
        </div>
    )
}