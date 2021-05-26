const request = require('request');
const chalk = require('chalk');

const weatherUrl = 'http://api.weatherstack.com/current?access_key=11c19358314275d7a6064197e451cca5&query=47,30&units=m';
const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Odessa.json?access_token=pk.eyJ1IjoicmF5Y2hhcmxlcyIsImEiOiJja3A1bWlsZm0yaHdsMnJtY3djNTByY3EyIn0.yulndK3nsoOx1UheC6gHgg';

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service')
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    const data = response.body;
    const { current } = data;
    const { temperature, feelslike, weather_descriptions } = current;
    console.log(`The weather is ${weather_descriptions[0].toLowerCase()} now. It's ${temperature} degrees now, and it feels like ${feelslike}`);
  }
})

request({ url: locationUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location service')
  } else if (response.body.message) {
    console.log('Unable to find location');
  } else {
    const data = response.body;
    const cityData = data.features[0];
    const longitute = cityData.center[0];
    const latitude = cityData.center[1];
    console.log(cityData);
  }
})
