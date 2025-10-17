import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Watch from "./Components/Watch";
import User from "./Components/User";
import About from "./Components/About";
import Community from "./Components/Community";
import Page from "./Components/Page";
import Preloader from "./Components/Preloader";

// function LoaderWrapper() {
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFade(true); // start fade out
//       setTimeout(() => setLoading(false), 800); // remove loader after fade duration
//     }, 12000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return <Login />;

//   return <Preloader fade={fade} />;
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoaderWrapper />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
