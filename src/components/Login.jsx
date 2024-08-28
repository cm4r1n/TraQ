import React from "react";

function Login() {
  return (
    <div className="loginBox">
      <form className="loginForm">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
