//packages
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan')

//app settings
const app = express();
const port = process.env.PORT || 3000;

//controller setup
const todontsController = require('./controller/todonts');

//log from morgan
app.use(logger('dev'));


//views
app.set('view engine', 'hbs');
app.use('/todonts', todontsController);


//homepage
app.get('/', (req, res) => {
	res.send('This is our homepage!');
});


//start server
app.listen(port, (req, res) => {
	console.log('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});