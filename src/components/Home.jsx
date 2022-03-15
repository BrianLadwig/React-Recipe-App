import Categories from "./Categories";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import './Home.css'

export default function Home(){
    const {setCat} = useContext(FilterContext)




function clickHandler(){
   setCat({breakfast:false,meal:false,snack:false})
}
    return(
        <div className="Home">
        <h2>Welcome to <span className="chefB">Chef Brain</span> </h2>
        <p>When you can read you can cook!</p>
        <p>"Chef Brian" helps you to find and organize your recipes  </p>
        <button><NavLink onClick={clickHandler} to="/recipes">Browse Recipes</NavLink></button>

        <h3>Categories</h3>
        <Categories/>
        </div>
    )
}