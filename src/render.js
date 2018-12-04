export function renderSelectItem(news){ 
  let container = document.getElementById('news');
  let selectElement = document.createElement('select'); 
  selectElement.setAttribute('id', 'select');
  selectElement.setAttribute('class', 'col-md-6');

  let sourcesOptionList = news.sources.map(source => `<option>${source.id}</option>`); 
  
  let sortedList = sourcesOptionList.reduce((sum, item) => sum + item, '');

  selectElement.innerHTML = sortedList;
  container.parentNode.insertBefore(selectElement, container);
}

export function renderNews(news){     
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