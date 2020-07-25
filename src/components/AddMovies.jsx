import React from "react";

const AddMovies = (props) => {
  return (
    <div className="wrapper">
      <form
        className="add-movies"
        onSubmit={(event) => {
          console.log("AddMovies Submit");
          event.preventDefault();
          return props.newMovieSubmitHandler(event);
        }}
      >
        <input
          className="add-movie-input"
          type="text"
          onChange={props.handleAddMovieSubmit}
          value={props.pendingMovie}
          placeholder="Add movie title here"
        ></input>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddMovies;
