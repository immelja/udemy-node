const request = require('request')
const yargs = require('yargs')

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

geocode.geoCodeAddress(argv.address, (error,result) => {
    if (error) {
        console.log(error)
    } else {
    	console.log(JSON.stringify(result,undefined,2))
    }
})

//54a2092fccb378d9b2ae9057e4a5fe59
// 

weather.getWeather()


// request({
// 	url: 'http://www.gogle.com.au/?gws_rd=ssl'
// }, (error, response, body) => {
//     console.log(JSON.stringify(error, undefined, 2))
// })