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

  const genreMap = {
    16: "Animation",
    28: "Action", 
    14: "Fantasy",
    53: "Thriller",
    12: "Adventure",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
  };

  return (
    <div className="pg-container">
      <div className="pg-backdrop-wrapper">
        <div 
          className="pg-backdrop"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
          }}
        />
        <BackButton id='backbutton-page'/>
      </div>

      <div className="pg-content-wrapper">
        <div className="pg-main-layout">
          <div className="pg-poster-section">
            <img
              className="pg-poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className="pg-info-section">
            <div className="pg-title-block">
              <h1 className="pg-title">{movie.title}</h1>
              <div className="pg-meta">
                <span className="pg-meta-item">
                  <svg className="pg-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {movie.release_date}
                </span>
                <span className="pg-separator">•</span>
                <span className="pg-language">{movie.original_language.toUpperCase()}</span>
              </div>
            </div>

            <div className="pg-stats-grid">
              <div className="pg-stat-card pg-stat-rating">
                <div className="pg-stat-header">
                  <svg className="pg-stat-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="pg-stat-label">Rating</span>
                </div>
                <div className="pg-stat-value">{movie.vote_average}</div>
                <div className="pg-stat-sub">{movie.vote_count} votes</div>
              </div>

              <div className="pg-stat-card pg-stat-popularity">
                <div className="pg-stat-header">
                  <svg className="pg-stat-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <span className="pg-stat-label">Popularity</span>
                </div>
                <div className="pg-stat-value">{movie.popularity.toFixed(1)}</div>
                <div className="pg-stat-sub">score</div>
              </div>

              <div className="pg-stat-card pg-stat-status">
                <div className="pg-stat-header">
                  <svg className="pg-stat-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="pg-stat-label">Status</span>
                </div>
                <div className="pg-stat-value pg-status-text">Upcoming</div>
                <div className="pg-stat-sub">release</div>
              </div>
            </div>

            <div className="pg-overview-block">
              <h2 className="pg-section-title">
                <span className="pg-title-accent"></span>
                Overview
              </h2>
              <p className="pg-overview">{movie.overview}</p>
            </div>

            <div className="pg-genres-block">
              <h3 className="pg-genres-title">Genres</h3>
              <div className="pg-genres-list">
                {movie.genre_ids.map((id) => (
                  <span key={id} className="pg-genre-tag">
                    {genreMap[id] || `Genre ${id}`}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;