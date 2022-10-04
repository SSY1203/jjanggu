import React, { useEffect } from "react";
import Menu_bar from "../components/Menu_bar";
import { useState } from "react";
import Movies from "../components/Movies.js";

function Series() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=ced7adb668b769ac0f677aaf143e9548&session_id=1d5a402b326106273903546dacb8c186171ae50c&language=ko-KO&sort_by=created_at.asc&page=1"
      )
    ).json();
    const json2 = await (
      await fetch(
        "https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=ced7adb668b769ac0f677aaf143e9548&session_id=1d5a402b326106273903546dacb8c186171ae50c&language=ko-KO&sort_by=created_at.asc&page=2"
      )
    ).json();
    setLoading(false);
    const all = json.results.concat(json2.results);

    setMovie(all);
  };
  useEffect(() => getMovie(), []);

  return (
    <div style={{ marginTop: "65px", width: "100%", height: "100%" }}>
      <div className="fixed-menu">
        <Menu_bar />
      </div>
      {loading ? (
        <strong className="loading">Loading...</strong>
      ) : (
        <div className="movies">
          {movie.map((movie) => (
            <Movies
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              date={movie.release_date}
              summary={movie.overview}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Series;
