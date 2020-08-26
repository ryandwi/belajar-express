const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser")
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const PORT = 8080



// MIDDLEWARE
const csrfProtection = csrf({ cookie: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(csrfProtection)

//  SET VIEW
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SET ROUTER
const homeRouter = require('./routers/email')
app.use('/', homeRouter)


app.listen(PORT);