import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statsPipe'
})
export class StatsPipe implements PipeTransform {

  transform(value: number): string {
    return value +' '+ ('*').repeat(Math.round(value/10));
  }

}
