import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <header className="about-header">
          <h1>About Us</h1>
          <p className="tagline">// Your Anime Sanctuary //</p>
        </header>

        <div className="about-content">
          <p>
            In the vast universe of anime, our platform is a space for fans who love stories, characters, and the culture behind the art.
          </p>

          <div className="speech-bubble">
            "WHERE EVERY FRAME TELLS A STORY"
          </div>

          <p>
            Created by passionate otakus, our goal is to provide a clean, honest, and enjoyable environment for exploring anime classics and modern hits alike.
          </p>

          <div className="manga-panel">
            <p>
              <strong>Our Promise:</strong> Honest reviews, recommendations, and updates for both new and classic anime fans.
            </p>
          </div>

          <p>
            Join our community and discover your next favorite anime.
          </p>
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>Vast Archive</h3>
            <p>Access decades of anime, from timeless classics to current favorites.</p>
          </div>
          <div className="feature-card">
            <h3>Honest Reviews</h3>
            <p>Unbiased insights from real anime enthusiasts.</p>
          </div>
          <div className="feature-card">
            <h3>Community</h3>
            <p>Connect with fans, discuss series, and share recommendations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
