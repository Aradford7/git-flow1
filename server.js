//Set up modules here
const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride =  require('method-override');
//const session = require('express-session');

//require modules here
require('./db/db');

const housesController = require('./controller/houses');

//MiddleWare Area
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

// app.use(sessions({
//   secret: 'Random Secret String',
//   resave: false,
//   saveUninitalized: false,
// }));

app.use('/houses', housesController);

app.listen(PORT, (err) => {
  console.log('Server listening on port: ', PORT);
});