const express = require('express');

const app = express();
app.use(express.json()); // uses JSON

// const compression = require('compression');

// app.use(compression());

const mysql = require('mysql');

const connection = require('express-myconnection');

const config = require('./modules/common/config.json');

app.use(connection(mysql, config, 'request'));

// Functional Modules
// require('./modules/employee/index')(app);
require('./modules/employee')(app);

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`Application listerning in ${port}`);
});
