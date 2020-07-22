import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
type Products = Product[];

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})

//export class RatingConponent implements OnChange {
// @Input() rating: number;

//  starWidth: number;

//ngOnChanges(): void{
//console.log(this.rating);
//this.starWidth = (75/5) * this.rating;
//}
//}
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

  onRatingClicked(message: string): void {
    alert(message);
  }

  onProductDetail(product: Product): void {
    this.service.saveProductDetail(product);
  }
}
