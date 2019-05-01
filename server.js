//Set up modules here
const PORT = 3002;
const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const housesController = require("./controllers/houses");
const realtorsController = require("./controllers/realtors");
const authController = require("./controllers/authController");
//require('dotenv').config()
require("./db/db.js");
//require('dotenv').config()




//require modules here

//MiddleWare Area
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static('public'));

app.use(session({
  secret: 'Random Secret String',
  resave: false,
  saveUninitalized: false,
}));

//authController before other controllers
// app.use(sessions({
//   secret: 'Random Secret String',
//   resave: false,
//   saveUninitialized: false,
// }));

////////

////////

app.use("/realtor", realtorsController);

app.use("/houses", housesController);

app.use('/auth', authController);

app.listen(process.env.PORT || 3002, err => {
  console.log("Server listening on port: ", process.env.PORT);
});
