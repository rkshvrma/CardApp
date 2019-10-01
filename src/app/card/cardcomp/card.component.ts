import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card';

@Component({
    selector: 'rb-cards',
    templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {
    selectedRecipe: Card;

    constructor() { }

    ngOnInit() {
    }
}
