import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beautypage',
  templateUrl: './beautypage.page.html',
  styleUrls: ['./beautypage.page.scss'],
})
export class BeautypagePage implements OnInit {

  constructor() { }

  parlors = [1, 2, 3, 4, 5, 6];
  ngOnInit() {
  }

}
