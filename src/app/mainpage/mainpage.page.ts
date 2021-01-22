import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cardservice';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
  providers: [CardsService],
})
export class MainpagePage implements OnInit {
  cards = [];

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardsService.menuCard;
  }

}
