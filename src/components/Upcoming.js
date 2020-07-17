import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Playing() {
  const baseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const placeholder =
    "https://via.placeholder.com/185x278?text=Can't find Image on TMDB";
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((res) => {
        setUpcoming(res.data.results);
      });
  }, []);

  return (
    <div className="playing">
      <h2>
        {" "}
        <span>Upcoming Movies</span>
      </h2>
      <div className="grid">
        {upcoming.map((movie) => {
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
        })}
      </div>
    </div>
  );
}
