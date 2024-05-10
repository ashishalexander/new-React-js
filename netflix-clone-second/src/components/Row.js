import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie)
    if (trailerUrl) {
        setTrailerUrl('');
    } else {
      movieTrailer( movie?.original_title||movie?.title||movie?.name|| "" )
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams)
                const videoId = urlParams.get('v');
                console.log(videoId)
                setTrailerUrl(videoId || ''); // Update trailerUrl state with videoId or empty string if not found
            })
            .catch(error => console.log(error));
    }
};


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={()=>handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
