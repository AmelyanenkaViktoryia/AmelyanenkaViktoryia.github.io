const btn = document.getElementById('btn').addEventListener('click', btnCallback);

fetch('https://newsapi.org/v2/sources?apiKey=15815122ee5a4cbcb7f70331e12826a7')
  .then(
    function(response) {
    	if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' + response.status);  
        return;  
      }
      response.json().then(function(data) {  
        renderSelectItem(data);
      });
    }    
  )
  .catch(function(err) {  
    console.log('Fetch Error', err);  
  });

function getSelectValue() {
  let select = document.getElementById('select');
  let selectedNewChannel = select.value;
  return selectedNewChannel;
}

function btnCallback() {
  fetch(`https://newsapi.org/v2/top-headlines?sources=${getSelectValue()}&apiKey=15815122ee5a4cbcb7f70331e12826a7`)
	.then(
  	function(response) {
    	if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' + response.status);  
        return;  
      }
      response.json().then(function(data) {  
        renderNews(data);
      });
    }
  )
  .catch(function(err) {  
    console.log('Fetch Error', err);  
  });
}

function renderSelectItem(news){ 
  let container = document.getElementById('news');
  let selectElement = document.createElement('select'); 
  selectElement.setAttribute('id', 'select');
  selectElement.setAttribute('class', 'col-md-6');

  let sourcesOptionList = news.sources.map(source => `<option>${source.id}</option>`); 
  
  let sortedList = sourcesOptionList.reduce((sum, item) => sum + item, '');

  selectElement.innerHTML = sortedList;
  container.parentNode.insertBefore(selectElement, container);
}

function renderNews(news){     
  let newsContainer = document.getElementById('news');
  let requiredText = document.querySelector(".required-text");
  newsContainer.innerHTML = '';

  let articlesList = news.articles.map(article => 
    `<h1>${article.title}</h1>
    <img src="${article.urlToImage}">
    <p>${article.content}</p>
    <p>${article.author}</p>
    <a href="${article.url}">Read more</a>` 
  );  

  let sortedArticleList = articlesList.reduce((sum, item) => sum + item, '');

  newsContainer.innerHTML = sortedArticleList;
  requiredText.parentNode.insertBefore(newsContainer, requiredText);
}