import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log('my Pipe', value);
    if (value) {
      return 'Discounted'!
    }
    return '';
  }

}
