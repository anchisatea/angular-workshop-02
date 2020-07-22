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
  filterData: string = ' ';

  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.getAllProduct();
  }
}
