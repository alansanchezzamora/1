const express = require('express');
const app = express();
const env = require("dotenv").config(); 

app.use('/', require('./routes/lesson1'));


app.listen(process.env.port || 3000);
console.log('Web server is listening at port ' + (process.env.port || 3000));