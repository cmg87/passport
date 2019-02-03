const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
// const expressValidator = require('express-validator');
const mongo = require("mongodb");
const routes = require("./routes/api");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ppc",
  { useNewUrlParser: true, useCreateIndex: true }
);
const db = mongoose.connection;

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// //Static production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Uses API routes for routing
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
