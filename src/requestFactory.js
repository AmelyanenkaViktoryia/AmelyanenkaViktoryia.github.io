export class RequestFactory {
    constructor(){}
    static create(type, url, resolveCallback, opts = {}){
      if(type === 'get'){
        return new GetRequest(url, resolveCallback);
      }else{
        let params = {
          method: 'post',
          body: JSON.stringify(opts)
        };
        return new PostRequest(url, resolveCallback, params);
      }
    }
  }

export class GetRequest {
    constructor(url, resolveCallback){
      this.url = url;
      this.resolveCallback = resolveCallback;
    }
    getList(){
      let resolveCallback = this.resolveCallback;
      fetch(this.url)
      .then(
        function(response) {
          if (response.status !== 200) {  
            throw response;
          }
          response.json().then(function(data) {  
            resolveCallback(data);
          });
        }    
      )
      .catch(function(responseError) {  
        import('./errors').then((module)=>{
            const errorSingleton = new module.Singleton(responseError);
            errorSingleton.showError(responseError);
        })
      });
    }
  }
  
  export class PostRequest {
    constructor(url, resolveCallback, params){
      this.url = url;
      this.resolveCallback = resolveCallback;
      this.params = params;
    }
    getList(){
        let resolveCallback = this.resolveCallback;
        fetch(this.url, this.params)
        .then(
            function(response) {
            if (response.status !== 200) {  
                throw response;
            }
            response.json().then(function(data) {  
                resolveCallback(data);
            });
            }    
        )
        .catch(function(responseError) {  
            import('./errors').then((module)=>{
                const errorSingleton = new module.Singleton(responseError);
                errorSingleton.showError(responseError);
            })
        });
    }
  }
  
