import React from "react";

function Detail_Movie({
  id,
  title,
  date,
  runtime,
  tagline,
  poster_path,
  rating,
  summary,
}) {
  const route = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
  return (
    <div className="movie-detail" id={id}>
      <img src={route + poster_path}></img>
      <div className="one-movie__contents">
        <h1>{title}</h1>
        <h3>#{tagline}</h3>
        <div className="one-movie__text">
          <h5>평점 : ({rating})</h5>
          <h5>개봉일 : {date}</h5>
          <h5>상영시간:{runtime}분</h5>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail_Movie;
