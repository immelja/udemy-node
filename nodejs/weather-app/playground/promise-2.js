const request = require('request')

var geocodeAddress = (address) => {
    return new Promise((resolve,reject) => {
        var encodedAddress = encodeURIComponent(address)
        var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
        request({
        	url: url,
        	json: true
        },(error,response,body) => {
        	
        	if (body.status === 'OK') {
        	  resolve(body)
            } else {
            	reject('unable to connect to ',url)
            }
        })
    })
}

geocodeAddress('28 covala court').then((location) => {
    console.log(JSON.stringify(location,undefined,2))
},(error) => {
    console.log(error)
})
