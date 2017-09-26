const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear',() => {
	return new Date().getFullYear()
})

hbs.registerHelper('screamIt',(text) => {
	return text.toUpperCase()
})

app.set('view engine','hbs')

app.use((req,res,next) => {
    var now = new Date().toString()
    var log = `${now}: ${req.method} ${req.path}`
    fs.appendFile('server.log',log + '\n',(err) => {
    	console.log(err)
    })
    console.log(log)
    next()
})

// app.use((req,res,next) => {
//   res.render('maintenance.hbs',{
//   	pageTitle: 'Temporarily Unavailable'
//   })
// })

app.use(express.static(__dirname + '/public'))


app.get('/',(req,res) => {
  // res.send('<h1>hello ex</h1>')
  res.render('home.hbs',{
  	pageTitle: 'homepage',
  	welcomeMessage: 'welcome'
  })
})

app.get('/about',(req,res) => {
	res.render('about.hbs',{
		pageTitle: 'about page'
	})
})

app.get('/bad',(req,res) => {
	res.send({
		error: 'error'
	})
})

app.listen(port,() => {
	console.log(`server is running on port ${port}`)
})