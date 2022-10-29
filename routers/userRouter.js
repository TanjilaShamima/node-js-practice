const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("I am user Page")
})

router.get('/login', (req, res) => {
    res.send("I am logged in..........")
})

router.get('/logout', (req, res) => {
    res.send("I am logged out..........")
})

router.get('/signup', (req, res) =>{
    res.send("I am signed up.......")
})


module.exports = router