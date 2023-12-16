const express = require("express");
const routes = require("./routes/index");
const helmet = require("helmet");

const app = express();

const { PORT = 3001 } = process.env;

// middleware to parse json request
app.use(express.json());

// security measure
app.use(helmet());

// routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
