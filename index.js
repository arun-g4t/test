const express = require('express');
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/check', (req, res) => {
    res.statusCode(200).send({
        status: true
    })
})

app.listen(9099, () => {
    console.log("Server running")
})