import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(obj: any, field?: any): any {
  	console.log(obj, field);
  	if (obj ===undefined ) return null;
  	
  	if (field == 'Name (Z-A)')
  		obj.value.sort((x,y) => y.login.localeCompare(x.login))
  	if (field == 'Rank Up')
  		obj.value.sort((x,y) => x.score - y.score)
  	if (field == 'Rank Down')
  		obj.value.sort((x,y) => y.score - x.score)
  	else
  		obj.value.sort((x,y) => x.login.localeCompare(y.login));

    return obj;
  }
}