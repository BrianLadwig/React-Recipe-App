import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";
import { UserContext } from "../contexts/UserContext.js";
import Login from "./Login.jsx";

export default function Nav({ open, setOpen }) {
  const { cat, setCat } = useContext(FilterContext);
  const { user, setUser, setFavorites } = useContext(UserContext);
  const [openLogin, setOpenLogin] = useState(false);

  function clickHandler(str) {
    setCat({ breakfast: false, meal: false, snack: false });
  }
  function logOut() {
    setUser(null);
    setFavorites([]);
  }
  return (
    <nav className="Nav fixed" id={open ? "open" : "notOpen"}>
      <NavLink to="/">home</NavLink>
      <NavLink onClick={clickHandler} to="/recipes">
        {" "}
        recipes
      </NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/favorites">favorites</NavLink>

      {user ? (
        <a onClick={() => logOut()}>logout</a>
      ) : (
        <a
          onClick={() => {
            setOpenLogin(!openLogin);
          }}
        >
          login
        </a>
      )}
      {openLogin ? (
        <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
      ) : (
        ""
      )}
    </nav>
  );
}
