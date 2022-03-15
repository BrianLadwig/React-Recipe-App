import arrayOfRecipes from "../data";
import { useParams } from "react-router-dom";
import "./Recipe.css";
import { FcAlarmClock } from "react-icons/fc";
import { useState } from "react";

export default function Recipe() {
  const { recipeId } = useParams();
  const [servings, setServings] = useState(2)

  function changeHandler(e){
      setServings(e.target.value)
  }

  const recipe = arrayOfRecipes.find((recipe) => recipe.id == recipeId);

  if (!recipe) {
    return <h2>404: Recipe not found</h2>;
  }

  return (
    <div className="Recipe">
      <h2>{recipe.name}</h2>
      <img src={recipe.pic} alt="" />
      <div id="infoBox">
        {" "}
        <p>{recipe.info}</p>
        <p id="time">
          <FcAlarmClock /> prep Time: {recipe.time}
        </p>
      </div>

      <div id="prepBox">
        <div id="ingBox">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>
                {(item.amount * servings).toFixed(2)} {item.unit} {item.ingredient }
              </li>
            ))}
          </ul>
          <div id="servings"><p>Servings:</p>
          <input type="number" value={servings} onChange={changeHandler}/></div>
          
          
        </div>

        <div id="instBox">
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      {recipe.notes ? (
        <div id="notes">
          <h3>Notes:</h3> <p>{recipe.notes}</p>
        </div>
      ) : (
        ""
      )}

      
    </div>
  );
}
