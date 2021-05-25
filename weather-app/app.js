const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=11c19358314275d7a6064197e451cca5&query=46.482952,30.712481&units=m';

request({ url, json: true }, (error, response) => {
  const data = response.body;
  const { current } = data;
  const { temperature, feelslike, weather_descriptions } = current;
  console.log(`The weather is ${weather_descriptions[0].toLowerCase()} now. It's ${temperature} degrees now, and it feels like ${feelslike}`);
})
