import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(obj: any, field: string): any {
  	if (field == 'Name (Z-A)')
  		obj.sort((x,y) => y.login.localeCompare(x.login));
  	if (field == 'Rank Up')
  		obj.sort((x,y) => x.score - y.score)
  	if (field == 'Rank Down')
  		obj.sort((x,y) => y.score - x.score)
  	else if(field == 'Name (A-Z)')
  	 	obj.sort((x,y) => x.login.localeCompare(y.login));
    return obj;
  }
}