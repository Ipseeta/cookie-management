const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const route = require('./route');
const app = express();
app.use(cookieParser());
app.set('port', 4000);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile(__dirname + "/" + "index.html" );
})
app.use('/api', route);
const server = app.listen(app.get('port'), () => {
    console.log(`App is running on port ${app.get('port')}`)
});

module.exports = server;