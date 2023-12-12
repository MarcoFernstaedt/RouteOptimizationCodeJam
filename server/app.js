const express = require('express');

const app = express()

const { PORT = 3000 } = process.env

app.listen(() => {
    console.log(`Listening to port: ${PORT}`)
})