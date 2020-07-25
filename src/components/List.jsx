import React from "react";
import AddedMoviesList from './AddedMoviesList.jsx'

const List = (props) => {
  return (
    <div>
      {props.list.map((movie, i) => (
        <AddedMoviesList
          key={i}
          movie={movie.title}
        />
      ))}
    </div>
  );
};

export default List;