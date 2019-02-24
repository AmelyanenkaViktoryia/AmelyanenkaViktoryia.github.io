import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

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
  
  constructor(private articleService: ArticleService, private apiService: ApiServiceService){}

  public handleClick(data: any):void {
    this.articleService.updatedDataValue.emit(data.name);
    this.articleService.selectedSource.emit(data.id);   
  }  

  public filterName(data: string):void {
    this.articleService.filterArticleName.emit(data);
  } 

  ngOnInit() {
    this.filterControl.valueChanges.subscribe((value: string) => {
      this.filterName(value);
    })

    this.apiService.getSourceList().subscribe((sourceList: any) => {
      console.log('sourceList', sourceList);
      this.sourceList = sourceList.sources;
    })

    // this.articleService.selectedSource().subscribe((articles: any) => {
    //   console.log('getArticlesBySource', articles);  
    // })
  }  

}
