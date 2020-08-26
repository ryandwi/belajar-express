const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser")
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const PORT = 8080

// COMPRESSION
app.use(compression())

// MIDDLEWARE
const csrfProtection = csrf({ cookie: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(csrfProtection)

// MISMATCH TOKEN
app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err)
  res.status(403)
    .json({ status: false, data: 'Error csrf token mismatch'})
})

//  SET VIEW
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SET ROUTER
const homeRouter = require('./routers/email')
app.use('/', homeRouter)


app.listen(PORT);