import { NavLink } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="anime-landing">
        <div className="overlay"></div>
        <video autoPlay loop muted playsInline className="bg-video">
          <source
            src="https://motionbgs.com/media/1194/vegeta-ultra-ego.960x540.mp4"
            type="video/mp4"
          />
        </video>

        <div className="content">
          <h1 className="title">Welcome to AniVerse</h1>
          <p className="subtitle">
            Stream, explore, and relive your favorite anime adventures.
          </p>

          <div className="buttons">
            <NavLink
              to="/watch"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button className="btn watch">Watch Now</button>
            </NavLink>
            <NavLink to="/community">
              <button className="btn join">Join the Community</button>
            </NavLink>
          </div>
        </div>

        <div className="anime-glow"></div>
      </div>
    </>
  );
}

export default Home;
