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
    const p1 = new Product(
      '1101',
      'Facial cleanser 01',
      1000.0,
      1,
      true,
      'https://www.kiehls.co.th/media/catalog/product/cache/2/thumbnail/4dc2e3274ef0740eb55a46bfb4da7e12/3/6/3605971864865.1583814297.jpg'
    );
    const p2 = new Product(
      '1102',
      'Repair cream 02',
      2500.5,
      2,
      true,
      'https://images.ulta.com/is/image/Ulta/2254420?op_sharpen=1&resMode=bilin&qlt=85&wid=800&hei=800&fmt=jpg'
    );
    const p3 = new Product('1103', 'Perfume 03', 3500.0, 3, true, 'xxx');
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
