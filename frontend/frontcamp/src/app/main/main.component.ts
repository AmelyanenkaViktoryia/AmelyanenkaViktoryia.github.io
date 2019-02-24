import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public title: string = 'Some News';

  constructor() { } 

  public handleEvent(event: string) {
    this.title = event;
  } 
  
  ngOnInit() {
  }

}
