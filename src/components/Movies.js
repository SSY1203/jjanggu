import React from "react";
import { Link } from "react-router-dom";
function Movies({ id, medium_cover_image, title, rating, date, summary }) {
  const route = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

  return (
    <div id={id} className="series-box">
      <img src={route + medium_cover_image}></img>
      <div className="series__contents">
        <div className="series-box__title">
          <h3 className="series__title">{title}</h3>
          <h6 className="series__rating">({rating})</h6>
        </div>
        <h6 className="series__year">({date})</h6>
        <div className="series-box__text">
          <p className="series__text">
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
            {summary.length > 235 ? (
              <Link className="button-more" to={`detail/${id}`}>
                더보기
              </Link>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movies;

//https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mUaSjomGtcVFbOwUgI1xJa5Fgqu.jpg
