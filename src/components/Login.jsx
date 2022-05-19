import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";
import "./Login.css"
import { NavLink } from "react-router-dom";

export default function Login() {
  const { users, user, setUser, email, password, setEmail,setPassword } = useContext(UserContext);

  // console.log(user);

  function handleLogin(e) {
    e.preventDefault();

    users.forEach(item => {
      if (item.email === email && item.password === password){
          setUser(item)
          alert('successfully logged in')
      }
      else alert('wrong email or password')
    
    })
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
