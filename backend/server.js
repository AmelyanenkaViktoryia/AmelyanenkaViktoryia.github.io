// needed packages
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use('/', router);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.get('/', function (req, res) {
  res.json({message: 'Hi there! There are our news'});
});

// routes that end in /news
router.route('/news')
  // create news (accessed at POST http://localhost:8080/news)
  .post(function (req, res) { 
    console.log("News created");
    console.log(req.body);
    res.json({message: 'News created'});
  })
  // get all the news (accessed at GET http://localhost:8080/news)
  .get(function (req, res) {
    console.log("News requested");
    res.json({message: 'News requested!'});
  });

// routes that end in /news/:news_id
router.route('/news/:news_id')
// get the news with that id
  .get(function (req, res) {
    console.log('News with id ' + req.params.news_id + ' requested');
    res.json({message: 'News with id ' + req.params.news_id + ' requested'});
  })
  // update the news with this id (accessed at PUT http://localhost:8080/news/:news_id)
  .put(function (req, res) {
    console.log('News with id ' + req.params.news_id + ' UPDATED');
    res.json({message: 'News with id ' + req.params.news_id + ' UPDATED'});
  })
  // delete the news with this id (accessed at DELETE http://localhost:8080/news/:news_id)
  .delete(function (req, res) {
    console.log('News with id ' + req.params.news_id + ' DELETED');
    res.json({message: 'News with id ' + req.params.news_id + ' DELETED'});
});

app.get('*', function (req, res) {
    res.render('index', {title: 'Welcome page', message: 'Hello newcomer'})
});

app.listen(8080);