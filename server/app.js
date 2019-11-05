const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//route
const todoRoute = require('./route/todoroute');
//cors
app.use(cors());
//body parse
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//sending to route
app.use('/todo', todoRoute);


//goto index
app.use(express.static('./public'), function (req, res) {
    res.send('404 Not found');
});





app.listen(8080, console.log('run server on port 8080..'));
