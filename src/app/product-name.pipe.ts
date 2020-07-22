import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'productName',
})
export class ProductNamePipe implements PipeTransform {
  transform(input: string, target: string): string {
    return input.replace(target, '-');
  }
}
