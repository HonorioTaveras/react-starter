import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    // create the binding to this Search component for handleInputChange func
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log("event target: ", event.target.value);
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div className="search-wrapper">
        <form
          onSubmit={(event) =>
            this.props.handleOnSubmit(event, this.state.title)
          }
        >
          <div className="search-bar-space">
            <input
              type="text"
              onChange={(event) => this.handleInputChange(event)}
              placeholder="Search..."
            />
            <input type="submit" value="Go!" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
