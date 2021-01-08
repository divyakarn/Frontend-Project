import { MenuCards } from './../model/cards.model';
import { Component } from '@angular/core';
import { CardsService } from '../services/cardservice';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [CardsService]
})
export class HomePage {

  cards = [];

  constructor(private cardsService: CardsService) {

  }
  ngOnInit() {
    this.cards = this.cardsService.menuCard

  }

}
