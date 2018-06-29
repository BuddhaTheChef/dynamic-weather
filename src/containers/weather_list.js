import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const currentWeather = cityData.list[0].main.temp * 9/5 -459.67;
    const n = currentWeather.toFixed();
    const currentDesc = cityData.list[0].weather[0].description;
    const current = cityData.list[0].weather[0].icon;
    const currentIcon = `http://openweathermap.org/img/w/${current}.png`;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 -459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humiditys = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(cityData);

    return(
      <tr className="tr-content" key={name}>
        <td><GoogleMap lon={lon} lat={lat} /><h4 className="city-name">{name}</h4></td>
        <td className="current"><h1>{n}&#8457;</h1><img alt="weather icon" src={currentIcon}/>{currentDesc}</td>
        <td><Chart data={temps} color="purple" units="&#8457;" /></td>
        <td><Chart data={pressures} color="black" units="hPa" /></td>
        <td><Chart data={humiditys} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover main-table">
        <thead>
          <tr className="chart-headers">
            <th>City</th>
            <th>Current</th>
            <th>Avg. Temp this Week (&#8457;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
