const express = require('express')
const morgan = require('morgan')
const app = express()


const PORT = 5000

function testMiddleware (req, res, next) {
    console.log("I am logged in,,,,,")
    next()
}

function secondMiddleware () {
    return (req, res, next) =>{
        console.log(`${req.method} - ${req.url}`)
        next()
    }
}

function reserveMiddleware (req, res, next) {
    if(req.url === '/reserve') {
        res.send('<h1>Sorry ... This page is reserved by admin...</h1>')
    }

    next()
}

// app.use(morgan('dev'))

middleware = [testMiddleware, reserveMiddleware, secondMiddleware()]

app.use(middleware)

app.get('/about', morgan('dev'), ((req, res) => {
    res.send('<h2>This is the about us page</h2>')
}))
app.get('/help', ((req, res) => {
    res.send('<h2>This is the help page</h2>')
}))

app.get('/reserve', ((req, res) => {
    res.send("<p>This is reserve page</p>")
}))

app.get('/', ((req, res) => {
    res.send('<h1>This is the homepage</h1>')
}))

app.get('*', ((req, res) => {
    res.send('<h3>404 !! Not Found....</h3>')
}))


app.listen(PORT, () => {
    console.log("Listening port ", PORT)
})