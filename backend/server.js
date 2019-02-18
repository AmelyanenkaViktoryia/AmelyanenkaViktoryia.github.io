// needed packages
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

app.get('*', function (req, res) {
  res.render('index', {title: 'Welcome page', message: 'Hello newcomer'})
});

app.listen(8080);
