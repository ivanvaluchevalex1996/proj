import React from "react";
import { Spin, Alert } from "antd";

import Movie from "../movie/movie";
import "./movieList.css";

function MovieList({
  items, error, isLoaded,
}) {
  if (error) {
    return (
      <Alert
        className="alert"
        type="error"
        message="Что-то пошло не так,но мы уже работаем над этим"
        banner
      />

    );
  }
  if (isLoaded) {
    return <Spin />;
  }

  const elements = items.map((item) => (
    <Movie
      key={item.id}
      title={item.original_title}
      overview={item.overview}
      date={item.release_date}
      image={item.poster_path}
      id={item.genre_ids}
      vote={item.vote_average}
      ids={item.id}
      rating={item.rating}
    />
  ));
  return <ul>{elements}</ul>;
}

export default MovieList;
