import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {CardData} from '../shared/card.service';
import { Card } from '../shared/card';
 

@Component({
   selector: 'rb-recipe-list',
  templateUrl: 'cardlist.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Card[] = [];
  @Output() recipeSelected = new EventEmitter<Card>();
  

  constructor(private recipeService:CardData) {}

  ngOnInit() {
      this.recipes = this.recipeService.getCards();
  }

 

}










