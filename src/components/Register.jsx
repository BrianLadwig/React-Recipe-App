import "./Register.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";

export default function Register() {
  const {
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
    userRecipes
  } = useContext(UserContext);

  let passwordRepeat = "";

  function registerHandler() {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      favorites,
      userRecipes,
    };

    setUsers([...users, newUser])
    
  }
console.log("from register:",users);
  return (
    <div className="Register">
      Register
      <input
        type="text"
        id="firstName"
        placeholder="first name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        id="LastName"
        placeholder="last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        type="text"
        id="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="password"
        id="passwordRepeat"
        placeholder="repeat password"
        value={passwordRepeat}
        onChange={(event) => (passwordRepeat = event.target.value)}
      />
      <button onClick={registerHandler}>Create Account</button>
    </div>
  );
}
