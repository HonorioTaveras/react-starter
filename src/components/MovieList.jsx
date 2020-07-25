import React from "react";
import MovieListEntry from "./MovieListEntry.jsx";
import PropTypes from "prop-types";

var MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, i) => (
        <MovieListEntry movie={movie} key={i} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
