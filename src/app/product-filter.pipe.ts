import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: ProductFilterPipe[], name: string): ProductFilterPipe[] {
    return products.filter((p) => p.name.indexOf(name) != -1);
  }
}
