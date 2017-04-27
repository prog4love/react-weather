var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is {temp} in {location} now</h3>
  );
};

module.exports = WeatherMessage;
