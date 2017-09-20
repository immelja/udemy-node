const request = require('request')

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=28%20covala%20court%20st%20helena',
	json: true
}, (error, response, body) => {
    console.log(body)
})