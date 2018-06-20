import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a 5 day forecast in your favorite cities"
          className=""
          value={this.state.term}
          onChange={this.onInputChange}
         />
        <span>
          <button type="submit" className="">Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar
