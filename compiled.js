"use strict";

var btn = document.getElementById('btn').addEventListener('click', btnCallback);
fetch('https://newsapi.org/v2/sources?apiKey=15815122ee5a4cbcb7f70331e12826a7').then(function (response) {
  if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' + response.status);
    return;
  }

  response.json().then(function (data) {
    renderSelectItem(data);
  });
}).catch(function (err) {
  console.log('Fetch Error', err);
});

function getSelectValue() {
  var select = document.getElementById('select');
  var selectedNewChannel = select.value;
  return selectedNewChannel;
}

function btnCallback() {
  fetch("https://newsapi.org/v2/top-headlines?sources=".concat(getSelectValue(), "&apiKey=15815122ee5a4cbcb7f70331e12826a7")).then(function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }

    response.json().then(function (data) {
      renderNews(data);
    });
  }).catch(function (err) {
    console.log('Fetch Error', err);
  });
}

function renderSelectItem(news) {
  var container = document.getElementById('news');
  var selectElement = document.createElement('select');
  selectElement.setAttribute('id', 'select');
  selectElement.setAttribute('class', 'col-md-6');
  var sourcesOptionList = news.sources.map(function (source) {
    return "<option>".concat(source.id, "</option>");
  });
  var sortedList = sourcesOptionList.reduce(function (sum, item) {
    return sum + item;
  }, '');
  selectElement.innerHTML = sortedList;
  container.parentNode.insertBefore(selectElement, container);
}

function renderNews(news) {
  var newsContainer = document.getElementById('news');
  var requiredText = document.querySelector(".required-text");
  newsContainer.innerHTML = '';
  var articlesList = news.articles.map(function (article) {
    return "<h1>".concat(article.title, "</h1>\n    <img src=\"").concat(article.urlToImage, "\">\n    <p>").concat(article.content, "</p>\n    <p>").concat(article.author, "</p>\n    <a href=\"").concat(article.url, "\">Read more</a>");
  });
  var sortedArticleList = articlesList.reduce(function (sum, item) {
    return sum + item;
  }, '');
  newsContainer.innerHTML = sortedArticleList;
  requiredText.parentNode.insertBefore(newsContainer, requiredText);
}
