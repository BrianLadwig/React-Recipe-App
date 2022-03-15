import React, { useEffect } from "react";
import { useState } from "react";

const currentUser = localStorage.getItem("currentUser")

const userTemplate = [];

export const UserContext = React.createContext(userTemplate);

export const UserContextProvider = props => {

  const [users, setUsers] = useState([{name:'admin', email:'admin', password:'123', favorites:[]}])

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user))
}, [user])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [favorites, setFavorites] = useState([])

  const userContextValue = { users, setUsers, user, setUser, email, setEmail, password, setPassword, favorites, setFavorites };

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
