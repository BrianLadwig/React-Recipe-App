import { Routes, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login.jsx";
import Home from "./Home";
import Recipes from "./Recipes";
import Recipe from "./Recipe";


export default function Main() {
  

  return (
    <div className="main">
      <Routes>
        <Route index element={<Home />} />
          <Route path="recipes">
            <Route index element={<Recipes />} />
            <Route path=":recipeId" element={<Recipe />} />
          </Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<p>Error 404: Page not found.</p>} />
      </Routes>
    </div>
  );
}
