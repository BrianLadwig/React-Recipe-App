import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";
import { UserContext } from "../contexts/UserContext.js";

export default function Nav() {
  const { cat, setCat } = useContext(FilterContext);
  const { user,setUser } = useContext(UserContext);

  function clickHandler(str) {
    setCat({ breakfast: false, meal: false, snack: false });
  }
  return (
    <div className="Nav">
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink onClick={clickHandler} to="/recipes">
          {" "}
          recipes
        </NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/favorites">favorites</NavLink>

        {user ? (
          <a
            onClick={() => {
              setUser(null);
            }}
          >
            logout
          </a>
        ) : (
          <NavLink to="/login">login</NavLink>
        )}
      </nav>
    </div>
  );
}
