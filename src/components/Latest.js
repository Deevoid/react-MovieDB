import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Lottie from "lottie-react-web";
import animation from "./9764-loader.json";
import { Link } from "react-router-dom";

export default function Latest() {
  const baseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const [latest, setLatest] = useState({});
  const placeholder =
    "https://via.placeholder.com/185x278?text=Can't find Image on TMDB";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API}&language=en-US&include_adult=false`
      )
      .then((res) => {
        setLatest(res.data);
      });
  }, []);

  return (
    <div className="latest">
      <h2>
        <span>Latest Movie</span>
      </h2>

      {latest ? (
        latest.adult ? (
          <h5 className="adult-warning">
            Warning: TMDB returned an adult movie.
          </h5>
        ) : (
          <div className="grid">
            <Card
              cardImg={
                <Link to={`${latest.id}`}>
                  <img
                    src={
                      latest.poster_path
                        ? `${baseUrl}${latest.poster_path}`
                        : placeholder
                    }
                    alt={latest.original_title}
                  />
                </Link>
              }
              cardHeader={
                <>
                  <span className="title">{latest.original_title}</span>
                  <span className="lang">{latest.original_language}</span>
                </>
              }
            />
          </div>
        )
      ) : (
        <div className="lottie-div">
          <Lottie
            options={{
              height: 50,
              width: 50,
              animationData: animation,
            }}
          />
        </div>
      )}
    </div>
  );
}
