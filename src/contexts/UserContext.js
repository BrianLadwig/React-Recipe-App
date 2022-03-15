import React from "react";
import { useState } from "react";

const userTemplate = null;

export const UserContext = React.createContext(userTemplate);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState([{name:'admin', email:'admin@admin.com', password:'admin', favorites:[]}]);

  const UserContextValue = { user, setUser };

  return (
    <UserContext.Provider value={UserContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
