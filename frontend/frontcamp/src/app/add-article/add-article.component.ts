import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.less']
})
export class AddArticleComponent implements OnInit {

  public articleForm: FormGroup;
  public authorControl: FormControl = new FormControl('');
  public titleControl: FormControl = new FormControl('', Validators.required);
  public contentControl: FormControl = new FormControl('');
  public descriptionControl: FormControl = new FormControl('', Validators.required);
  public imageControl: FormControl = new FormControl('');
  public publishedAtControl: FormControl = new FormControl('');
  public sourceControl: FormControl = new FormControl('');
  public mode: string = 'Add';
  public articleId: string;
  
  constructor(
    private activeRouter: ActivatedRoute, 
    private router: Router,
    private apiService: ApiServiceService) { }

  ngOnInit() {
    
    this.articleForm = new FormGroup({
      author: this.authorControl,
      title: this.titleControl,
      description: this.descriptionControl,
      urlToImage: this.imageControl,
      publishedAt: this.publishedAtControl,
      url: this.sourceControl,
      content: this.contentControl
    });
  
    this.articleForm.valueChanges.subscribe(data => console.log(data))



    this.activeRouter.data.subscribe((data)=>{
      if(data && data.mode){
        this.mode = data.mode;
      }
    })

    if(this.mode === 'Edit'){
      this.activeRouter.params.subscribe((params)=>{
        console.log('this.activeRouter.params', params.id)
        this.articleId = params.id;
        this.apiService.getLocalArticle(this.articleId).subscribe((article: any) => {
          console.log('article', article);

          this.articleForm.setValue({
            author: article.author,
            title: article.title,
            description: article.description,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            url: article.url,
            content: article.content
          })

        })
      })
    }

    
  }

  add(){
    if(this.articleForm.valid){
      this.apiService.addArticle(this.articleForm.value).subscribe((article: any) => {
        this.router.navigate(['/']);
      })
    }
  }

  update(){
    if(this.articleForm.valid){
      this.apiService.updateArticle(this.articleId, this.articleForm.value).subscribe((article: any) => {
        this.router.navigate(['/']);
      })
    }
  }


}
