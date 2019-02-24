import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsTitle'
})
export class NewsTitlePipe implements PipeTransform {

  transform(value: string[], letter: string = 'p'): any {
    return value.filter((value) => {
      return value[0] === letter
    });
  }
}
