import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-source-section',
  templateUrl: './source-section.component.html',
  styleUrls: ['./source-section.component.less']
})
export class SourceSectionComponent implements OnInit {
  @Output() sourceOutput: EventEmitter<string> = new EventEmitter();  
  
  public sourceList: string[] = [
    'ABC News',
    'BBC News',
    'Buzzfeed',
    'Fortune',
    'Daily Mail'
  ]
  constructor() { }

  public selectAttribute(data: string):void {
    this.sourceOutput.emit(data);
  }  

  ngOnInit() {
  }  

}
