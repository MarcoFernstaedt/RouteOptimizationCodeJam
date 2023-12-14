const express = require('express');
const helmet = require('helmet');

const app = express()

const { PORT = 3000 } = process.env

// security measure
app.use(helmet())

app.listen(() => {
    console.log(`Listening to port: ${PORT}`)
})