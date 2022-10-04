import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Menu_bar from "../components/Menu_bar";
import Detail_Movie from "../components/Detail_Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ced7adb668b769ac0f677aaf143e9548&language=ko-KO`
      )
    ).json();
    setLoading(false);
    setMovie(json);
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
        <div className="one-movie">
          <Detail_Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            date={movie.release_date}
            runtime={movie.runtime}
            tagline={movie.tagline}
            genres={movie.genres}
            poster_path={movie.poster_path}
            rating={movie.vote_average}
            summary={movie.overview}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
