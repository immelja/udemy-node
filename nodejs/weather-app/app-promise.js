const yargs = require('yargs')
const axios = require('axios')

const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather')

const argv = yargs
.options({
	address: {
		demand: true,
		alias: 'a',
		describe: 'Address to fetch weather for',
		string: true
	}
})
.help()
.alias('help','h')
.argv

var encodedAddress = encodeURIComponent(argv.address)
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address')
  }
  var lat = response.data.results[0].geometry.location.lat
  var long = response.data.results[0].geometry.location.lng
  var weatherUrl = `https://api.darksky.net/forecast/54a2092fccb378d9b2ae9057e4a5fe59/${lat},${long}?units=auto`

  console.log(response.data.results[0].formatted_address)
  console.log(weatherUrl)
  return axios.get(weatherUrl)
}).then((response) => {
   console.log('got weather')
   var temperature = response.data.currently.temperature
   var apparentTemperature = response.data.currently.apparentTemperature
   console.log(`It's currently ${temperature} It feels like ${apparentTemperature}`)
}).catch((e) => {
  console.log(e)
})

