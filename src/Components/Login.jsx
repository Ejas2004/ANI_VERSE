import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.login.css";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate(); // ✅ move here

  function loginCheck(e) {
    e.preventDefault();
    const a = email.current.value;
    const b = password.current.value;
    console.log(a, b);

    if (a === "ejas@gmail.com" && b === "12345") {
      window.alert("✅ Successfully Logged In!");
      navigate("/home"); // ✅ use navigate function
    } else {
      window.alert("❌ Invalid Email or Password!");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={loginCheck}>
          <input
            type="email"
            placeholder="Enter Email"
            required
            ref={email}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            ref={password}
          />
          <button type="submit" >Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
