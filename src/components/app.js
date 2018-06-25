import React, { Component } from 'react'
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';


class App extends Component {
  render() {
    return (
      <div>
        <h1 className="main-title">Dynamic Weather</h1>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}

export default App
