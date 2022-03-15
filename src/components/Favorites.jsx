import { UserContext } from "../contexts/UserContext.js";
import { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const Pic = styled.div`
  width: 14em;
  height: 10em;
  background-image: url(${(props) => props.pic});
  background-position: center;
  background-size: 14em;
`;

export default function Favorites(){

    const {user,favorites,setFavorites} = useContext(UserContext)
    
    return(
        <div className="Favorites">
            {user? <h2>Your Favorites</h2> :<p>please login to use this feature</p>}

            {user && favorites.map((recipe) => (
        <div id="recipeList" key={recipe.id}>
          <Pic pic={recipe.pic} />
          <NavLink to={recipe.id + ""}>
            {" "}
            <div id="textbox">
              <h2>{recipe.name}</h2>
              <p>{recipe.info}</p>
              
            </div>
          </NavLink>
          <AiOutlineHeart id="favHeart" onClick={()=>favoritesHandler(recipe)} recipe={recipe} />
        </div>
      ))}
        </div>
    )
}