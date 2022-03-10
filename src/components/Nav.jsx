import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";

export default function Nav(){

    const {cat,setCat} = useContext(FilterContext)




function clickHandler(str){
   setCat(str)
}
    return(
        <div className="nav">
           <nav>
        <NavLink to="/">Home</NavLink>|{' '}
        <NavLink onClick={()=>clickHandler('')} to="/recipes">Recipes</NavLink>|{' '}
        <NavLink to="/about">About</NavLink>|{' '}
        <NavLink to="/login">Login</NavLink>
       
        </nav>
        </div>
    )
}