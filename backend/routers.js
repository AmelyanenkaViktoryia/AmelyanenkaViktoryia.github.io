// needed packages
const express = require('express');
const router = express.Router();
const NewsModel = require('./Schema/NewsSchema.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://VicaO:vednabred17@ds163164.mlab.com:63164/mytask_vica');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/', function (req, res) {
  res.json({message: 'Hi there! There are our news'});
});

// routes that end in /news
router.route('/news')
  // create news (accessed at POST http://localhost:8080/news)
  .post(function (req, res, next) { 
    const newsData = req.body;
    const newNews = new NewsModel({
      'author': newsData.author, 
      'title': newsData.title, 
      'description': newsData.description,
      'url': newsData.url,
      'urlToImage': newsData.urlToImage,
      'publishedAt': newsData.publishedAt,
      'content': newsData.content
    });

    newNews.save(function (err, newNews) {
      
      if (err) {
          err.description = "Error in adding new news";
          console.log('error to add new news');
          next(err);
      } else {
          res.send(newNews);
          console.log("News created");
      }
    });
  })
  // get all the news (accessed at GET http://localhost:8080/news)
  .get(function (req, res, next) {
    NewsModel.find({}, function (err, news) {
      if (err) {
        err.description = "Can't get news";
        next(err);
      } else {
        res.send(news);
      }
    });
  });

// routes that end in /news/:news_id
router.route('/news/:news_id')
// get the news with that id
  .get(function (req, res, next) {
    const id = req.params.news_id;
      NewsModel.findOne({_id: id}, function (err, news) {
        if (err) {
            err.description = "News with id " + id + "  does not exist";
            next(err);
        } else {
            if (news) {
                console.log('news = ' + news);
                res.send(news);
            } else {
                res.status(403).send('No news');
            }
        }
      });
  })
  // update the news with this id (accessed at PUT http://localhost:8080/news/:news_id)
  .put(function (req, res, next) {
    const id = req.params.news_id;
    const newsData = req.body;

    NewsModel.findById(id, function (err, news) {
      if (err) {
          err.description = 'News with id ' + id + ' does not exist';
          next(err);
      } else {
        if (news) {
          news.title = newsData.title || news.title;
          news.author = newsData.author || news.author;
          news.body = newsData.body || news.body;
          news.save(function (err, news) {
            if (err) {
              err.description = 'Error during news updation was found';
              next(err);
            } else {
              if (news) {
                console.log('News with id ' + id + ' was updated');
                res.send(news);
              }
            }
          });
        } else {
          const errObj = {
            description: 'News with id ' + id + ' not found',
            body: 'News update failed'
          };
          
          next(errObj);
        }
      }
    });
  })
  // delete the news with this id (accessed at DELETE http://localhost:8080/news/:news_id)
  .delete(function (req, res, next) {
    console.log(req.params);
    const id = req.params.news_id;
    NewsModel.deleteOne({_id: id}, function (err) {
      if (err) {
        err.description = 'News with id ' + id + ' not found. Delete failed';
        next(err);
      } else {
        res.json({message: 'News with id ' + id + ' deleted'});
      }
    });
});

module.exports = router;