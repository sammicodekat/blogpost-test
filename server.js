// LOAD ENV VARIABLES
require('dotenv').config({silent:true});

// SET SERVER PORT
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/testdb';
// REQUIRES
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const webpack = require('webpack')
const morgan = require('morgan');
const path = require('path');
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const mongose = require('mongoose');
mongoose.Promise = Promise;


mongoose.connect(MONGODB_URI,err => {
  console.log(err||`Mongo connected to ${MONGODB_URI}`)
})
// APP DECLARATION
const app = express();
const compiler = webpack(webpackConfig)
// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, noInfo: true
}))
app.use(webpackHotMiddleware(compiler))
// ROUTES
app.use('/api', require('./routes/api'));
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
