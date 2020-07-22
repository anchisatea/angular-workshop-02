import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAllProduct(): Product[] {
    const products: Product[] = [];
    const p1 = new Product('01', 'Book 01', 1000.0, 4.0, true, 'xxx');
    const p2 = new Product('02', 'Book 02', 3500.0, 5.0, true, 'xxx');
    const p3 = new Product('03', 'Book 03', 5000.0, 2.5, true, 'xxx');
    products.push(p1, p2, p3);
    return products;
  }

  constructor() {}
}
