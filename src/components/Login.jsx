import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";
import "./Login.css";
import { NavLink } from "react-router-dom";

export default function Login({ openLogin, setOpenLogin }) {
  const {
    users,
    user,
    setUser,
    email,
    password,
    setEmail,
    setPassword,
    setFavorites,
  } = useContext(UserContext);

  // console.log(user);

  function handleLogin(e) {
    e.preventDefault();

    const findUser = users.find((item) => item.email === email && item.password === password);
  
      if (findUser) {
        setUser(findUser);
        setFavorites(findUser.favorites);
        alert("successfully logged in");
        setOpenLogin(!openLogin);
      } else alert("wrong email or password");
   
  }
  return (
    <div className="Login" onSubmit={handleLogin}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Log in</button>

      <p>or</p>
      <NavLink to="/register">register</NavLink>
    </div>
  );
}
