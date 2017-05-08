import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weather.actions';
import {Link} from 'react-router';

const FavoriteCities = () =>
  <div>
    <h1>Favorite Cities</h1>
    <ul className="favorites">
      <li><Link to="/weather/atlanta">Atlanta</Link></li>
      <li><Link to="/weather/austin">Austin</Link></li>
    </ul>
  </div>;

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeather(this.props.params.name)
  }
  componentWillReceiveProps(newProps) {
    if(this.props.params.name !== newProps.params.name) {
      this.props.getWeather(newProps.params.name);
    }
  }
  render() {
    let weather = this.props.weatherData;
    let weatherDisplay;
    console.log('weather');
    if (weather) {
      weatherDisplay = <p>
        The weather in {weather.name} is:
        {weather.main.temp} degrees F<br/>
        with a high of {weather.main.temp_max} F<br/>
        and a low of {weather.main.temp_min} F.
      </p>;
    } else if (this.props.isFetching) {
      weatherDisplay = <p><img src="/images/gears.gif" alt="loading"/></p>;
    } else if (this.props.error) {
      weatherDisplay = <p>{this.props.error}</p>;
    }
    return (
      <div>
        {weatherDisplay}
        {FavoriteCities()}
      </div>
    );
  }
}


const WeatherContainer = ReactRedux.connect(
  state => state.weather,
  actions
)(Weather);

export default WeatherContainer;
