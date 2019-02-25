import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

interface Source {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}
@Component({
  selector: 'app-source-section',
  templateUrl: './source-section.component.html',
  styleUrls: ['./source-section.component.less']
})
export class SourceSectionComponent implements OnInit {  
  //@Output() sourceOutput: EventEmitter<string> = new EventEmitter();

  public filterControl: FormControl = new FormControl('');
  
  public sourceList: Source[] = [
   {
    category: "general",
    country: "by",
    description: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos.",
    id: "local-news",
    language: "ru/en",
    name: "My Local Frontcamp News",
    url: "https://localhost:4200"
   }
  ]
  
  constructor(private articleService: ArticleService, private apiService: ApiServiceService){}

  ngOnInit() {
    

    this.filterControl.valueChanges.subscribe((value: string) => {
      this.filterName(value);
    })

    this.apiService.getSourceList().subscribe((sourceList: any) => {
      console.log('sourceList', sourceList);
      this.sourceList = this.sourceList.concat(sourceList.sources);
      this.handleClick(this.sourceList[0]);
    })
  }  

  
  public handleClick(data: Source):void {
    this.articleService.updatedDataValue.emit(data.name);
    this.articleService.selectedSource.emit(data.id);   
  }  

  public filterName(data: string):void {
    this.articleService.filterArticleName.emit(data);
  } 


}
