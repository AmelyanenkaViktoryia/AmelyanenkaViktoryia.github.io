import {renderSelectItem, renderNews} from "./render";

export function getListFromNewsapi() {
  fetch('https://newsapi.org/v2/sources?apiKey=15815122ee5a4cbcb7f70331e12826a7')
  .then(
    function(response) {
    	if (response.status !== 200) {  
        throw response;
      }
      response.json().then(function(data) {  
        renderSelectItem(data);
      });
    }    
  )
  .catch(function(responseError) {  
    import('./errors').then((module)=>{
        const errorSingleton = new module.Singleton(responseError);
        errorSingleton.showError();
    })
  });
} 

function getSelectValue() {
  let select = document.getElementById('select');
  let selectedNewChannel = select.value;
  return selectedNewChannel;
}

export function btnCallback() {
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