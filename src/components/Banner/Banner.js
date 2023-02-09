import React from 'react';
import "./Banner.css";
import axios from "axios";
import  { useEffect, useState} from "react"; 
import requests from "../../requests/Request";

function Banner() {
  const [movie, setMovie] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(){
    
    const request = await axios.get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
    );
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
    console.log(movie?.backdrop_path);
  }
  
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  
  return (
    <div className="banner" 
    style={{
      backgroundImage: movie?.backdrop_path
      ? `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
      : 'url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")',
        backgroundPosition: "center center",
        backgroundSize:"Cover",
    }}>
        <div className="banner_contents">
            <h1>Movie name:</h1>
            <h1>
          {" "}
          {movie?.original_name || movie?.original_title || movie?.title}{" "}
        </h1>
            <div className="banner_buttons">
                <button>Play</button>
                <button>Wishlist</button>


                </div>
                <h3>
                <h3>{truncate(movie?.overview, 80)}</h3>
                  </h3>
            </div>
      



    </div>
  );
  }

export default Banner;