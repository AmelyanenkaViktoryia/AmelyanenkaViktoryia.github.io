import { Component, OnInit, Input, Output } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-source-name',
  templateUrl: './source-name.component.html',
  styleUrls: ['./source-name.component.less']
})
export class SourceNameComponent implements OnInit {

  //@Input() title: string;  
  public title: string = 'Some News';
  
  constructor(private articleService: ArticleService){}

  ngOnInit() {
    this.articleService.updatedDataValue.subscribe((data: string)=>{
      this.title = data;
    })
  }

}
