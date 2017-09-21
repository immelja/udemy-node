const request = require('request')

var geoCodeAddress = (address, callback) => {
	console.log(address)
	var encodedAddress = encodeURIComponent(address)
	console.log(encodedAddress)

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('unable to connect')
			// console.log('unable to connect')
		} else if (body.status === 'ZERO_RESULTS') {
		    callback('unable to find address')
			// console.log('unable to find address')
		} else if (body.status === 'OK') {
			callback(undefined,{
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			})
    // console.log(JSON.stringify(body, undefined, 2))
    // console.log(`Address: ${body.results[0].formatted_address}`)
    // console.log(`Lat: ${body.results[0].geometry.location.lat}`)
    // console.log(`Long: ${body.results[0].geometry.location.lng}`)
}
})
}


module.exports = {
	geoCodeAddress
}