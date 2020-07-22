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

  getAllProduct(): Observable<Product[]> {
    const p1 = new Product('1101', 'Name 01', 1000.0, 1, true);
    const p2 = new Product('1102', 'Name 02', 2500.5, 2, true);
    const p3 = new Product('1103', 'Name 03', 3500.0, 3, true);
    return of([p1, p2, p3]);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
}
