import React, { useEffect, useState } from "react";
import "./Watch.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Watch() {
  const[next,setNext]=useState(1)
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=8c8d4201c369e3061713ad1276a51176&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`)
      .then((res) => {
        console.log(res.data.results); // ✅ check if API data comes here
        setData(res.data.results); // ✅ store correct array
      })
      .catch((e) => console.log(e));
    
  }, []);
  let move=useNavigate()

  return (
    <div className="home-container">
      <div id="nav-watch">

      <button id="for-back" onClick={(()=>{
        move('/home')
      })}>
        BACK
      </button>
      <h1>Gallery</h1>
      </div>
      <div id="card-border">
        {datas.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay">
              <h2 className="title-text">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <button onClick={(()=>{
        setNext(next+1);
        console.log(next);
      })}> Next page</button>
    </div>
  );
}

export default Watch;
