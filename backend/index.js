// Modules and Globals
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path')


// Express Settings
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// serve static front end in production mode - AWS activity
// path.join() method joins the specified path segments into one path: client\build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'public', 'build')));
}

// Controllers & Routes

app.use(express.urlencoded({ extended: true }));

app.use("/places", require("./controllers/places"));
app.use("/users", require("./controllers/users"));

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
