require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


// define variables
const PORT = process.env.PORT || 3001;

// Connect to the database
require('./config/database.cjs');

// create app
const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', index.html));
})
app.listen(PORT, function() {
  console.log(`Express app running on port ${PORT}`)
});