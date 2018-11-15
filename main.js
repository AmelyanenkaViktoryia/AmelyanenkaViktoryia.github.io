const btn = document.getElementById('btn').addEventListener('click', btnCallback);

function getSources() {
  let xhr = new XMLHttpRequest();
  let result;
  xhr.open('GET', 'https://newsapi.org/v2/sources?apiKey=15815122ee5a4cbcb7f70331e12826a7', false);
  xhr.send();
  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
  } else {
    result = xhr.responseText;
    result = JSON.parse(result);
    renderSelectItem(result);
  }
}

getSources(); 

function getSelectValue() {
  let el = document.getElementById('select');
  let selectedNewChannel = el.value;
  return selectedNewChannel;
}

function requestNews(){
  let xhr = new XMLHttpRequest();
  let result;
  let url = `https://newsapi.org/v2/top-headlines?sources=${getSelectValue()}&apiKey=15815122ee5a4cbcb7f70331e12826a7`;
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
  } else {
    result = xhr.responseText;
    result = JSON.parse(result);
  }
  renderNews(result);
}

function btnCallback() {
  requestNews();
}

function renderSelectItem(news){ 
  let container = document.getElementById('news');
  let selectElement = document.createElement('select'); 
  selectElement.setAttribute('id', 'select');
  selectElement.setAttribute('class', 'col-md-6');

  let sourcesOptionList = news.sources.map(function(source) { 
    return `<option>${source.id}</option>` 
  }); 
  
  let sortedList = sourcesOptionList.reduce(function(sum, item) {    
    return sum + item;
  }, '');
  
  selectElement.innerHTML = sortedList;
  container.parentNode.insertBefore(selectElement, container);
}

function renderNews(news){     
  let newsContainer = document.getElementById('news');
  let orderedList = document.createElement('ol');
  newsContainer.innerHTML = '';

  let articlesList = news.articles.map(function(article) { 
    return `<h1>${article.title}</h1>
    <img src="${article.urlToImage}">
    <p>${article.content}</p>
    <p>${article.author}</p>
    <a href="${article.url}">Read more</a>` 
  });  

  for(var item of articlesList){ 
    orderedList.innerHTML += item; 
  } 
  newsContainer.appendChild(orderedList); 
}