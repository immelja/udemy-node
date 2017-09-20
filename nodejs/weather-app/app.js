const request = require('request')
const yargs = require('yargs')

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
console.log(encodedAddress)

request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('unable to connect')
	} else if (body.status === 'ZERO_RESULTS') {
		console.log('unable to find address')
	} else if (body.status === 'OK') {
    // console.log(JSON.stringify(body, undefined, 2))
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Lat: ${body.results[0].geometry.location.lat}`)
    console.log(`Long: ${body.results[0].geometry.location.lng}`)
}
})


// request({
// 	url: 'http://www.gogle.com.au/?gws_rd=ssl'
// }, (error, response, body) => {
//     console.log(JSON.stringify(error, undefined, 2))
// })