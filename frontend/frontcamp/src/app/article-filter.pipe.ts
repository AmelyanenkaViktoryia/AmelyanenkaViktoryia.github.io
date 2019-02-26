import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article.interface';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(articlesArray: Article[], inputString: string): any {
    if (articlesArray && inputString) {
      return articlesArray.filter((article) => {
        const regex = new RegExp("(" + inputString + ")", "gi");
        const str = article.title;
        const result = str.match(regex);
        return result;
      });
    }
    return articlesArray;   
  }

}
