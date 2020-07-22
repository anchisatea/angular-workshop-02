import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

@Output() ratingClicked: EventEmitter<string> = new EvenEmitter<string>();

onClickRating(): void { 
  console.log('Click on rating');
  this.ratingClicked.emit(`Rating ${this.rating} was clicked`);
}

export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
