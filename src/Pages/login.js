import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="welcome-section">
        <h1>Welcome to Our Platform</h1>
        <p>
        Investment is allocating resources today for future growth and returns.
        </p>
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="interactive-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
