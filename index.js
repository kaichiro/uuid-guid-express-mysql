require('dotenv/config')
const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000
const mysql2 = require('mysql2')
const path = require('path')
const bodyParser = require('body-parser')

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})
const dependences = { connection }

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

const customers = require('./routes/customers')
app.use('/customers', customers(dependences))

app.listen(port, () => {
    const linkApp = 'http://localhost'
    console.log(`App is working at ${linkApp}:${port}`)
})

connection.connect(() => {
    app.get('/', (req, res) => {
        res.render('home')
    })
})