const express = require('express');
const app = express();
const morgan = require('morgan');

// Setting
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes/index'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});