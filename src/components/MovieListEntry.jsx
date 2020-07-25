import React from "react";
import PropTypes from "prop-types";

var MovieListEntry = ({ movie }) => (
  <div className="movie-list-entry">
    <div className="movie-list">{movie.title}</div>
  </div>
);

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieListEntry;
