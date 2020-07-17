import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Singlemovie() {
  const movieId = useParams().id;
  const [singleMovie, setSingleMovie] = useState({});
  const baseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const placeholder =
    "https://via.placeholder.com/185x278?text=Can't find Image on TMDB";
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((res) => {
        setSingleMovie(res.data);
      });
  }, [movieId]);
  return (
    <div className="container">
      <div className="bg-div"></div>
      <div className="singleMovie">
        <div className="single-img">
          <img
            src={
              singleMovie.poster_path
                ? `${baseUrl}${singleMovie.poster_path}`
                : placeholder
            }
            alt={singleMovie.original_title}
          />
          <div className="status">
            <span>{singleMovie.status}</span>
            <span>{singleMovie.release_date}</span>
          </div>
        </div>
        <div className="detail">
          <h2>{singleMovie.original_title}</h2>
          <div className="genre">
            {singleMovie.genres &&
              singleMovie.genres.map((genre) => {
                return (
                  <span className="genre" key={genre.id}>
                    {genre.name}
                  </span>
                );
              })}
          </div>
          <div className="overview">
            {singleMovie.overview ? (
              <p>{singleMovie.overview}</p>
            ) : (
              <p>No overview available</p>
            )}
          </div>
        </div>
      </div>
      <span className="popularity">
        <i className="fas fa-star"></i>
        {singleMovie.popularity}
      </span>
    </div>
  );
}
