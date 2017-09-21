var request = require('request')

var getWeather = () => {

    request({
        url: 'https://api.darksky.net/forecast/54a2092fccb378d9b2ae9057e4a5fe59/-37.69312499999999,145.1306603?units=auto'
        ,json: true

    },(error,response,body) => {
        if (error) {
            console.log(error)
        } else if (response.statusCode === 200) {
            console.log(body.currently.temperature)
        } else {
        console.log(response.statusCode)
    }
})
}

module.exports = {
    getWeather
}