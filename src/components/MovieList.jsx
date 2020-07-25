import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'
import PropTypes from 'prop-types';


var MovieList = ({movies}) => {
  // console.log('is movies array: ', Array.isArray(movies));
  // console.log('is movie?: ', movies);
  return (
    <div>
      {movies.map((movie, i) =>
        <MovieListEntry
        movie={movie}
        key={i}
        />
        )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;