import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/card';

@Component({
   selector: 'rb-recipe-item',
  templateUrl: 'carditem.component.html'
})
export class CardItemComponent implements OnInit {
  @Input() recipe: Card;
//   recipeId: number;
//   totLike = 150;

  constructor() {}

  ngOnInit() {
  }

}
