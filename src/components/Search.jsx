import React from 'react';
import PropTypes from 'prop-types';

// var Search = ({searchBar}) => {

//   // console.log('props:', searchBar);
//     return (
//       <div>
//         <input
//         type="text"
//         onChange={ (event) => searchBar(event.target.value)}
//         // onChange={this.handleInputChange.bind(this)}
//         />
//       </div>
//     );
//   }



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('event target: ', event.target.value);
      this.setState({
        title: event.target.value
      });
  }

    render() {
      return (
        <form onSubmit={ (event) => this.props.handleOnSubmit(event, this.state.title)}>
          <input
            type="text"
            onChange={ (event) => this.handleInputChange(event)}
            // onChange={ (event) => handleInputChange(event.target.value)}
          />
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

// Search.propTypes = {
//   searchBar: PropTypes.func.isRequired
// };

export default Search;