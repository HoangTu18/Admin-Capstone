import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.style.scss";
function Login() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="login__form">
        <h3>Login</h3>
        <div className="input">
          <input type="text" placeholder="Username" />
          <i class="fa fa-user"></i>
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
          <i class="fa fa-key"></i>
        </div>
        <div className="button">
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
