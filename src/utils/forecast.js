const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/0543e4ba70e09b7aff42a222893148b0/' + latitude + ',' + longitude

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      // console.log(body.daily.data[0])
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degress out.
        The highest today is  ${body.daily.data[0].temperatureHigh} .
         And the lowest is  ${body.daily.data[0].temperatureLow} .
           There is a  ${body.currently.precipProbability} % chance of rain.`)
    }
  })
}

module.exports = forecast