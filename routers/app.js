const express = require('express')
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')

const app = express()

const PORT = process.env.PORT || 4000


//User route start

//User route End


app.use('/user', userRouter)
app.use('/posts', postRouter)

app.get('/product/:prodID', (req, res) => {
    console.log(req.params)
    res.send("I am user Page " +req.params.prodID)
})

app.get('/', ((req, res) => {
    res.send('<h1>Node is awesome....</h1>')
}))




app.listen(PORT, ()=> {
    console.log('Listening port ', PORT)
})