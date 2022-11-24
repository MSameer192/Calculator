//jshint esversion: 6
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {

    let mnum1 = Number(req.body.num1);
    let mnum2 = Number(req.body.num2);

    let result = mnum1 + mnum2
    res.send('Thanks for posting that result is' + result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
