import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/card';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'carddetail.component.html'
})
export class CardDetailComponent implements OnInit {
  @Input() selectedRecipe: Card;
    loadedPosts : any[] = [];

 

  ngOnInit() {
  }
}