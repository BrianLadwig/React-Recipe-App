import React, { useEffect } from "react";
import { useState } from "react";

const storageUser = localStorage.getItem("currentUser");
const currentUser = storageUser ? JSON.parse(storageUser) : null;

const userTemplate = [];

export const UserContext = React.createContext(userTemplate);

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([
    {
      firstName: "",
      lastName: "",
      email: "admin",
      password: "123",
      favorites: [],
      userRecipes: [],
    },
  ]);

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);

  const userContextValue = {
    users,
    setUsers,
    user,
    setUser,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    favorites,
    setFavorites,
    userRecipes,
    setUserRecipes,
    toggleFavorite
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
