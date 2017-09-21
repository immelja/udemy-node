var request = require('request')

var getWeather = (lat,long,callback) => {

    request({
        url: `https://api.darksky.net/forecast/54a2092fccb378d9b2ae9057e4a5fe59/${lat},${long}?units=auto`
        ,json: true

    },(error,response,body) => {
        if (error) {
            callback(error)
        } else if (response.statusCode === 200) {
            callback(undefined,body)
        } else {
        callback(response.statusCode)
    }
})
}

module.exports = {
    getWeather
}