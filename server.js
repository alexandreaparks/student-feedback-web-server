const express = require('express')  // import express library
const path = require('path')  // import path library
const bodyParser = require('body-parser')  // import body parser for POST requests

const indexRouter = require('./routes/index')  // import routes

const app = express()  // create web application server

//enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))

// server static files such as css
const staticFileLocation = path.join(__dirname, 'public')  // where static files are stored
app.use(express.static(staticFileLocation))  // tell application to use static files and where they can be found

// configure application to use Handlebars template engine and work with template files in views directory
// in other words - tell application where views (HTML/template files) are and use Handlebars to generate them
app.set('views', path.join(__dirname, 'views'))  // __dirname is where the project is stored
app.set('view engine', 'hbs')

app.use('/', indexRouter)  // make routes in index.js available to application - all requests to app are passed to here

// start server
let server = app.listen(process.env.PORT || 3000, function () {  // use specific port OR 3000
    console.log('Express server running on port: ' + server.address().port)
})
