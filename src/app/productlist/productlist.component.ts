import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [];
  filterData = ' ';

  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }
}
