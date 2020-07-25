import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import movies from '../movieEntries.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: this.props.movies,
      videos: this.props.movies
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     videos: this.props.movies
  //   });
  // }

  handleOnSubmit(event, title) {
    event.preventDefault();
    let copyVideos = this.state.allVideos.slice();
    // console.log('copy1: ', copyVideos);
    let filteredVideo = copyVideos.filter(video => video.title === title);
    // console.log('copy2: ', filteredVideo);

    this.setState({
      videos: filteredVideo
    })
  }


  render() {
    // console.log('movie entries: ', this.props.movies);
    return (
    <div>
      <div>
        <Search handleOnSubmit={this.handleOnSubmit} />
      </div>
      <div>
        <MovieList movies={this.state.videos} />
      </div>
    </div>
    )
  }
}

export default App;
