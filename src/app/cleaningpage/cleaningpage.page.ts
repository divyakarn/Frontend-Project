import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaningpage',
  templateUrl: './cleaningpage.page.html',
  styleUrls: ['./cleaningpage.page.scss'],
})
export class CleaningpagePage implements OnInit {

  constructor() { }

  cleaners = [1, 2, 3, 4, 5, 6, 7];

  ngOnInit() {
  }

}
