import { Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Recipes from "./Recipes.jsx";
import Recipe from "./Recipe.jsx";
import Register from "./Register.jsx";
import Favorites from "./Favorites.jsx";


export default function Main() {
  

  return (
    <div className="Main">
      <Routes>
        <Route path='RecipeApp' element={<Home />} />
          <Route path="recipes">
            <Route index element={<Recipes />} />
            <Route path=":recipeId" element={<Recipe />} />
          </Route>
        <Route path="favorites" element={<Favorites/>}/>
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<p>Error 404: Page not found.</p>} />
      </Routes>
    </div>
  );
}
