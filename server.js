//packages
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//app settings
const app = express();
const port = process.env.PORT || 3000;

//controller setup
const todontsController = require('./controller/todonts');

//log from morgan
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride('_method'));


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