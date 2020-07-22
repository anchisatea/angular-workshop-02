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
      'https://www.eucerin.co.th/~/media/eucerin/local/th/home-stage-teasers/2020/202003-product-image-3d-packshot/ph5/ph5_facial-cleanser/ph5_facial-cleanser.png?h=240&mw=290&w=290&rh=0&devicepixelratio=2&hash=67B54CB3188E00AC855A92E9E179BA05'
    );
    const p3 = new Product(
      '1103',
      'Perfume 03',
      3500.0,
      3,
      true,
      'https://staticimg.titan.co.in/Skinn/Catalog/FW04PFL_2.jpg'
    );
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
