import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Source Name';

  handleEvent(event: string){
    console.log(event);
    this.title = event;
  }
}
