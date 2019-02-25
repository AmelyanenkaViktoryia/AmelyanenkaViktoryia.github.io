import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.less']
})
export class AddArticleComponent implements OnInit {

  public articleForm: FormGroup;
  public authorControl: FormControl = new FormControl('');
  public titleControl: FormControl = new FormControl('');
  public descriptionControl: FormControl = new FormControl('');
  public imageControl: FormControl = new FormControl('');
  public publishedAtControl: FormControl = new FormControl('');
  public sourceControl: FormControl = new FormControl('');
  public mode: string = 'Add';
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    
    this.articleForm = new FormGroup({
      authorControl: this.authorControl,
      titleControl: this.titleControl,
      descriptionControl: this.descriptionControl,
      imageControl: this.imageControl,
      publishedAtControl: this.publishedAtControl,
      sourceControl: this.sourceControl,
    });
  


    this.router.params.subscribe((params)=>{
      console.log('this.router.params', params)
    })
    this.router.data.subscribe((data)=>{
      if(data && data.mode){
        this.mode = data.mode;
      }
    })
    
  }

}
