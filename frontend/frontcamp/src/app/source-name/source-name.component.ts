import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-source-name',
  templateUrl: './source-name.component.html',
  styleUrls: ['./source-name.component.less']
})
export class SourceNameComponent implements OnInit {
  @Input() title: string;  

  constructor() { }

  ngOnInit() {
  }

}
