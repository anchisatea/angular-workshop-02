import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    const p1 = new Product('01', 'Name 01', 100.0);
    const p2 = new Product('02', 'Name 02', 350.0);
    const p3 = new Product('03', 'Name 03', 500.0);
    this.products.push(p1,p2,p3);

  }

}
