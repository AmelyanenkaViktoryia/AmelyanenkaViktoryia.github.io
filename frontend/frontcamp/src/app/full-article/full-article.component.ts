import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Article } from '../article.interface';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.less']
})
export class FullArticleComponent implements OnInit {

  public article: Article;
  public articleId: string;
  constructor(private activeRouter: ActivatedRoute, 
    private router: Router,
    private apiService: ApiServiceService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((params)=>{
      console.log('this.activeRouter.params', params.id)
      this.articleId = params.id;
      this.apiService.getLocalArticle(this.articleId).subscribe((article: any) => {
        console.log('article', article);
        this.article = article;
      })
    })
  }

  public deleteArticle(id: string): void{
    this.apiService.removeLocalArticle(id).subscribe((response: any) => {
      this.router.navigate(['/']);
    })
  }

}
