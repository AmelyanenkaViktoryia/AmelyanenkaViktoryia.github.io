import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient){}

  public getSourceList() {
    return this.httpClient.get<any>('https://newsapi.org/v2/sources?apiKey=15815122ee5a4cbcb7f70331e12826a7');
  }

  public getArticlesBySource(id: string) {
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=15815122ee5a4cbcb7f70331e12826a7`);
  }  

  public getLocalNews() {
    return this.httpClient.get<any>(`http://localhost:8080/news`);
  }  

  public getLocalArticle(id: string) {
    return this.httpClient.get<any>(`http://localhost:8080/news/${id}`);
  }  

  public removeLocalArticle(id: string) {
    return this.httpClient.delete<any>(`http://localhost:8080/news/${id}`);
  }  

  public addArticle(article: Article) {
    return this.httpClient.post<any>(`http://localhost:8080/news/`, article);
  } 

  public updateArticle(id: string, article: Article) {
    return this.httpClient.put<any>(`http://localhost:8080/news/${id}`, article);
  } 
}
