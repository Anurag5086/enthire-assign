const express = require("express");
const cors = require("cors");

//App Config
const app = express();
const port = process.env.PORT || 8000;

//Upload config
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

//middleware
app.use(express.json());
app.use(cors());

//Routes
require('./routes')(app);
// require('./routes/todo')(app, db);
// require('./routes/calender')(app, db);
// require('./routes/upload')(app, db);

//Listener
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});