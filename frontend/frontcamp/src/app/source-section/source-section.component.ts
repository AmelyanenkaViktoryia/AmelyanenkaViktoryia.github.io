import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-source-section',
  templateUrl: './source-section.component.html',
  styleUrls: ['./source-section.component.less']
})
export class SourceSectionComponent implements OnInit {  
  //@Output() sourceOutput: EventEmitter<string> = new EventEmitter();

  public filterControl: FormControl = new FormControl('');
  
  public sourceList: string[] = [
    'ABC News',
    'BBC News',
    'Buzzfeed',
    'Fortune',
    'Daily Mail'
  ]
  
  constructor(private articleService: ArticleService){}

  public selectAttribute(data: string):void {
    this.articleService.updatedDataValue.emit(data);
  }  

  public filterName(data: string):void {
    this.articleService.filterArticleName.emit(data);
  }

  ngOnInit() {
    this.filterControl.valueChanges.subscribe((value: string) => {
      this.filterName(value);
    })
  }  

}
