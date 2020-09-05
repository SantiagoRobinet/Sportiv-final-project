import React, { useState, useEffect } from "react";
import "./LoginComponent.css";
import { loadUser } from "../../actions/AuthActions";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
 
  const { loginWithRedirect, user } = useAuth0();
  const { logout } = useAuth0();

  console.log('ESTO ES LO QUE ESTA EN LOGIN', user)
  return (
    <div>
      <form>
        <div className="username">
          <label>User</label>
          <input
            name="username"
            title="Ingresa tu nombre de usuario"
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </div>
        <div className="password">
          <label>Password</label>
          <input
            name="password"
            title="Ingresa tu nombre de usuario"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button
          className="submit-button"
          type="submit"
          onClick={() => loginWithRedirect()}
        >
          {" "}
          Sign In{" "}
        </button>
        <button
          className="submit-button"
          type="submit"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          {" "}
          Logout{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;

// event.preventDefault(); loadUser(userName, userPassword);
