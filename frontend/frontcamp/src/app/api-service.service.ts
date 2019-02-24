import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
