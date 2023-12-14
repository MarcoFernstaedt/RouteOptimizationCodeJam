const express = require("express");
const helmet = require("helmet");

const app = express();

const { PORT = 3001 } = process.env;

// middleware to parse json request
app.use(express.json());

// security measure
app.use(helmet());

app.listen(() => {
  console.log(`Listening to port: ${PORT}`);
});
