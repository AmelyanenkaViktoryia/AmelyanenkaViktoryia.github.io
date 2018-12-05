export class Singleton {

    static instance;
  
    constructor(response){
      if(!Singleton.instance){
        this.response = response;
        this.status = response.status;
        this.bg = document.createElement('div');
        this.popup = document.createElement('div');
        this.textField = document.createElement('div');
        this.buttonClose = document.createElement('button');
        this.buttonClose.innerHTML = 'close';
        this.buttonClose.addEventListener('click', this.closePopup);
        this.bg.style.position = 'absolute';
        this.bg.className = 'popup-bg';
        this.popup.className = 'popup-container';
        this.popup.appendChild(this.textField);
        this.popup.appendChild(this.buttonClose);
        this.bg.appendChild(this.popup);

        Singleton.instance = this;
      }
  
      return Singleton.instance;
    }

    showError(responseError){
        console.log(`Response Error:`);
        console.log(responseError);
        this.textField.innerHTML = `<p>Response Error: <b>${this.status} </b> (${responseError.statusText})</p>
                                <p>url: ${responseError.url}</p>`
        document.getElementById('cont').appendChild(this.bg);
    }

    closePopup(){
      document.getElementsByClassName('popup-bg')[0].remove();
    }

  }
