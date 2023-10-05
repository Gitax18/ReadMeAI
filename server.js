// Adding third party libs
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// routes
const routes = require('./routes/index')

const app = express();

app.listen(3000,()=>{
    console.log('server is listening at http://localhost:3000');
})
