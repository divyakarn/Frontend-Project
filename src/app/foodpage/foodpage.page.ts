import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.page.html',
  styleUrls: ['./foodpage.page.scss'],
})
export class FoodpagePage implements OnInit {

  constructor() { }
  restaurants = [1, 2, 3, 4, 5, 6, 7];

  ngOnInit() {
  }

}
