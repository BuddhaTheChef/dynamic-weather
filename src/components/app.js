import React, { Component } from 'react'
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';


class App extends Component {
  render() {
    return (
      <div>
        Dynamic Weather
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}

export default App
