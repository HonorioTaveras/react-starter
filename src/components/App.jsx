import React from "react";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import movies from "../movieEntries.js";
import AddMovies from "./AddMovies.jsx";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: this.props.movies,
      videos: this.props.movies,
      list: [],
      pendingMovie: "",
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.newMovieSubmitHandler = this.newMovieSubmitHandler.bind(this);
  }

  handleOnSubmit(event, title) {
    event.preventDefault();
    let copyVideos = this.state.allVideos.slice();
    let filteredVideo = copyVideos.filter((video) =>
      video.title.includes(title)
    );
    this.setState({
      videos: filteredVideo,
    });
  }

  handleAddMovieSubmit(event) {
    event.preventDefault();
    console.log("value: ", event.target.value);
    this.setState({
      pendingMovie: event.target.value,
    });
    console.log(this.state.pendingMovie);
  }

  newMovieSubmitHandler(event) {
    let movie = { title: '' + this.state.pendingMovie }
    let movieList = [movie, ...this.state.list]
    console.log("this got called list: ", this.state.list);
    event.preventDefault();
    // event.stopPropagation();
    // event.nativeEvent.stopImmediatePropagation();
    this.setState({
      // list: this.state.list.concat(this.state.pendingMovie),
      videos: movieList,
      pendingMovie: "",
    },
    () => console.log("list: ", this.state.list)
    );
  }

  render() {
    return (
      <div>
        <div>
          <AddMovies
            type="text"
            newMovieSubmitHandler={this.newMovieSubmitHandler}
            handleAddMovieSubmit={this.handleAddMovieSubmit}
            value={this.state.pendingMovie}
          />
        </div>
        <div>
          <Search handleOnSubmit={this.handleOnSubmit} />
        </div>
        <div>
          <MovieList movies={this.state.videos} />
        {/* </div>
        <div> */}
          <List list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
