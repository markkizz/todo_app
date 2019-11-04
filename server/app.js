const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//route
const todoRoute = require('./route/todoroute');
//
app.use(cors());
//body parse
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//sending to route
app.use('/todo', todoRoute);


//goto index
app.use(express.static('../public'), function (req, res) {
    res.send('404 Not found');
});





app.listen(3090, console.log('run server on port 3090..'));
