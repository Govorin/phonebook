import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'filter'
} )
export class FilterPipe implements PipeTransform {

  transform<T>(value: T[], searchValue: string): T[] {
    return searchValue ? value.filter(item => {
      return Object.keys(item).filter(key => key !== 'id').some(key => item[key].toLowerCase().includes(searchValue.toLowerCase()));
    }) : value;
  }

}
