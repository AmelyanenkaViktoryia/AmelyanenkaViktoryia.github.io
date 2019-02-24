import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public updatedDataValue: EventEmitter<string> = new EventEmitter();

  public filterArticleName: EventEmitter<string> = new EventEmitter();

  public selectedSource: EventEmitter<string> = new EventEmitter();

  constructor() { }   

}
