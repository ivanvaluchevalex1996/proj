import React from "react";
// import React, { useState } from "react";
import "./movie.css";
import { format } from "date-fns";
import { Progress, Rate } from "antd";

import { ratedPost } from "../functions/fetch";
import { truncate, changeColor } from "../functions/truncate";
import { Consumer } from "../context";

function Movie({

  title, overview, image, date, id, vote, ids, rating,
}) {
  return (
    <Consumer>

      {
        (genress) => (
          <li className="articles-card">
            <div className="container">
              <img src={`https://image.tmdb.org/t/p/original${image}`} alt="img" className="movie__image" />
              <Progress type="circle" percent={vote * 10} format={(percent) => (percent / 10).toFixed(1)} strokeColor={changeColor(vote)} className="movie-info__rate" />
              <div className="movie-info">
                <p className="movie-info__title">{title}</p>
                <p className="movie-info__date">{(Boolean(date) === false) ? null : format(new Date(date), "MMM dd, yyyy")}</p>
                {genress.map((genre) => {
                  if (id.includes(genre.id)) {
                    return (
                      <span className="movie-info__genre" key={genre.id}>{genre.name}</span>
                    );
                  } return null;
                })}
                <p className="movie-info__description">{truncate(overview)}</p>
                <div className="movie-info__star">
                  <Rate count="10" onChange={(e) => ratedPost(e, ids)} defaultValue={rating} />
                </div>
              </div>
            </div>
          </li>
        )
      }
    </Consumer>
  );
}

export default Movie;
