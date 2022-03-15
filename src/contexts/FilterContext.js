import React from "react";
import { useState } from "react";

const defaultValue = null;

export const FilterContext = React.createContext(defaultValue);

export const FilterContextProvider = props => {

  const [cat, setCat] = useState({
    breakfast: false,
    meal: false,
    snack: false,
  });

  const [searchTerm, setSearchTerm] = useState('')

  const contextValue = { cat, setCat, searchTerm, setSearchTerm };

  return <FilterContext.Provider value={contextValue}>{props.children}</FilterContext.Provider>;
};
