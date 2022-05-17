import { UserContext } from "../contexts/UserContext.js";
import { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import "./Recipes.css";

const Pic = styled.div`
  width: 14em;
  height: 10em;
  background-image: url(${(props) => props.pic});
  background-position: center;
  background-size: 14em;
  grid-area: 1/1/3/2;
`;

export default function Favorites() {
  const { user, favorites, setFavorites } = useContext(UserContext);

  function favoritesHandler(recipe) {
    const isFavorite = favorites.find((item) => item.id === recipe.id);

    // console.log("isFavorite:", isFavorite);
    if (!isFavorite) {
      setFavorites([...favorites, recipe]);
    } else {
      const updatedFavorites = favorites.filter(
        (item) => recipe.id !== item.id
      );

      //  console.log("updatetFav",updatedFavorites);
      setFavorites(updatedFavorites);
    }
  }

  return (
    <div className="Recipes">
      {user ? <h2>Your Favorites</h2> : <p>please login to use this feature</p>}

      {user &&
        favorites.map((recipe) => (
          <div id="recipeList" key={recipe.id}>
            <Pic pic={recipe.pic} />
            <NavLink className="recipeLink" to={recipe.id + ""}>
              {" "}
              <div id="textbox">
                <h2>{recipe.name}</h2>
                <p>{recipe.info}</p>
              </div>
            </NavLink>
            {!favorites.find((item) => item.id === recipe.id) ? (
              <AiOutlineHeart
                id="favHeart"
                onClick={() => favoritesHandler(recipe)}
                //recipe={recipe}
              />
            ) : (
              <AiTwotoneHeart
                id="favHeart"
                onClick={() => favoritesHandler(recipe)}
                //recipe={recipe}
              />
            )}
          </div>
        ))}
    </div>
  );
}
