import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electripage',
  templateUrl: './electripage.page.html',
  styleUrls: ['./electripage.page.scss'],
})
export class ElectripagePage implements OnInit {

  constructor() { }

  electricians = [1, 2, 3, 4, 5, 6, 7];
  ngOnInit() {
  }

}
