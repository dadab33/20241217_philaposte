import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value + ' €';
  }

}
