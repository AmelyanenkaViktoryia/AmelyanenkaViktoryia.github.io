import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.interface'
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.less']
})
export class NewsSectionComponent implements OnInit {
  public newsList: Article[] = []
  public char: string;
  public isLocalNews: boolean = false;
  constructor(private articleService: ArticleService, private apiService: ApiServiceService){}  

  ngOnInit() {
    this.articleService.filterArticleName.subscribe((data: string) => {
      this.char = data;
    })  

    this.articleService.selectedSource.subscribe((id: string) => {
      //this.newsList = data;
      console.log('id', id);
      if(id === 'local-news'){
        this.apiService.getLocalNews().subscribe((newsList: any) => {
          //console.log('newsList', newsList);
          this.newsList = newsList;
          this.isLocalNews = true;
        })
      }else {
        this.apiService.getArticlesBySource(id).subscribe((list: any) => {
          console.log('list', list);
          this.newsList = list.articles;
          this.isLocalNews = false;
        })
      }
      
    })
  
  }

  public deleteArticle(id: string): void{
    this.apiService.removeLocalArticle(id).subscribe((response: any) => {
      this.apiService.getLocalNews().subscribe((newsList: any) => {
        this.newsList = newsList;
        this.isLocalNews = true;
      })
    })
  }

}

