import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.login.css"; // ✅ fixed typo (should be Login.css)

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  function loginCheck(e) {
    e.preventDefault();
    const a = email.current.value;
    const b = password.current.value;

    if (a === "ejas@gmail.com" && b === "12345") {
      window.alert("✅ Successfully Logged In!");
      navigate("/home");
    } else {
      window.alert("❌ Invalid Email or Password!");
    }
  }

  return (
    <div className="login-container">
      {/* 🔹 Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source
          src="https://motionbgs.com/media/5028/zenitsu-demon-slayer.960x540.mp4" 
          type="video/mp4"
        />
      </video>
      <div className="overlay"></div>

      {/* 🔹 Login Box */}
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={loginCheck}>
          <input type="email" placeholder="Enter Email" required ref={email} />
          <input type="password" placeholder="Enter Password" required ref={password} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
