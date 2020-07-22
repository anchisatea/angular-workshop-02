import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //constructor(private http: HttpClient) {}
  constructor() {}
  public product: Product;

  getAllProduct(): Observable<Product[]> {
    const p1 = new Product('1101', 'Facial cleanser', 1000.0, 1, true, 'xxx');
    const p2 = new Product('1102', 'Brightening cream', 2500.5, 2, true, 'xxx');
    const p3 = new Product('1103', 'Perfume', 3500.0, 3, true, 'xxx');
    return of([p1, p2, p3]);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }

  saveProductDetail(product: Product): void {
    this.product = product;
  }

  restoreProductDetail(): Product {
    return this.product;
  }
}
