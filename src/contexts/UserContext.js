import React, { useEffect, useState } from "react";

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

  function toggleFavorites(recipe) {
    if (!user) {
      return alert("please log in");
    }

    const isFavorite = favorites.find((item) => item.id === recipe.id);

    if (!isFavorite) {
      users.forEach((item) => {
        if (item.email === user.email) {
          favorites;
          setFavorites([...favorites, recipe]);
          item.favorites.push(recipe);
          favorites;
        }
      });
    } else {
      const updatedFavorites = favorites.filter(
        (item) => recipe.id !== item.id
      );
      users.forEach((item) => {
        if (item.email === user.email) {
          item.favorites = item.favorites.filter(
            (element) => recipe.id !== element.id
          );
          setFavorites(updatedFavorites);
        }
      });
    }
  }

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
    toggleFavorites,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
