import React from "react";
import { useLocation } from "react-router-dom";
import "./Page.css";
import BackButton from "./BackButton";

function Page() {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return (
      <div className="pg-container">
        <h2>No movie data found</h2>
      </div>
    );
  }

  return (
    <div className="pg-container">
      
      {/* Backdrop banner */}
      <div
        className="pg-banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="pg-banner-overlay">
          <h1 className="pg-title">{movie.title}</h1>
          <p className="pg-release">{movie.release_date}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="pg-main-content">
        <img
          className="pg-poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="pg-info">
          <h2 className="pg-section-title">Overview</h2>
          <p className="pg-overview">{movie.overview}</p>

          <div className="pg-details">
            <p><strong>Popularity:</strong> {movie.popularity}</p>
            <p><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)</p>
            <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
            <p><strong>Genres:</strong> {movie.genre_ids.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;