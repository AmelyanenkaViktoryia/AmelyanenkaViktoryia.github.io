export class Singleton {
    static instance;
  
    constructor(response){
      if(!Singleton.instance){
        this.status = response.status;
        Singleton.instance = this;
      }
  
      return Singleton.instance;
    }

    showError(){
        console.log(`Response Error: ${this.status}`);
    }

  }
