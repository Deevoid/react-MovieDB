import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Search() {
  const baseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const placeholder =
    "https://via.placeholder.com/185x278?text=Can't find Image on TMDB";

  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then((res) => {
        setMovieData(res.data.results);
      });
  }
  function inputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="search">
      <h2>
        <span>Search Movie</span>
      </h2>

      <div className="input">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="searchInput"
            name="search"
            onChange={inputChange}
            required
          ></input>
          <button type="submit">Search</button>
        </form>
        <button
          className="clear"
          onClick={() => {
            setMovieData([]);
          }}
        >
          Clear Result
        </button>
      </div>

      <div className="result">
        <div className="grid">
          {movieData ? (
            movieData.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  cardImg={
                    <Link to={`${movie.id}`}>
                      <img
                        src={
                          movie.poster_path
                            ? `${baseUrl}${movie.poster_path}`
                            : placeholder
                        }
                        alt={movie.original_title}
                      />
                    </Link>
                  }
                  cardHeader={
                    <>
                      <span className="title">{movie.original_title}</span>
                      <span className="lang">{movie.original_language}</span>
                    </>
                  }
                />
              );
            })
          ) : (
            <p>No result found</p>
          )}
        </div>
      </div>
    </div>
  );
}
