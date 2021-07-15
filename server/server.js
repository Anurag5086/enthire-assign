const express = require("express");
const cors = require("cors");

//App Config
const app = express();
const port = process.env.PORT || 8000;

//Upload config
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(cors());

//Routes
require('./routes')(app);

//Listener
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});