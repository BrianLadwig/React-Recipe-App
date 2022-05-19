import Nav from "./Nav";
import { BsSearch } from "react-icons/bs";
import { FilterContext } from "../contexts/FilterContext.js";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import HamburgerMenu from "./HamburgerMenu.jsx";

export default function Header() {
  const { setSearchTerm } = useContext(FilterContext);
  const [open, setOpen] = useState(false);

  function searchHandler(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }
  return (
    <div className="Header">
      <div id="Logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/289/627/non_2x/brain-character-illustration-as-a-chef-is-cooking-free-vector.jpg"
          width="150"
        />
        <h1 className="chefB">Chef Brain</h1>
      </div>
      <div id="search">
        <input type="text" onChange={searchHandler} />
        <BsSearch id="lookingGlass" />
        <NavLink to="/recipes"></NavLink>
      </div>
      <div
        
      >
        <div id="burgerTrigger"
        onClick={(e) => {
          setOpen(!open);
        }}><HamburgerMenu open={open} /></div>      
        
        <Nav open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
