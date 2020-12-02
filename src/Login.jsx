import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.js";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://th.bing.com/th/id/OIP.cNcaSeHhWuCy88PeON7V7gHaCo?pid=Api&rs=1"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>SignIn</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            className="login__email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            className="login__password"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="on"
          />
          <button className="login__signin-btn" type="submit" onClick={signIn}>
            Login
          </button>
        </form>
        <p>
          By continuing, you agree to Fake Amazon's Conditions of Use and
          Privacy Notice.
        </p>

        <button className="login__register-btn" onClick={register}>
          Create your account
        </button>
      </div>
    </div>
  );
};

export default Login;
