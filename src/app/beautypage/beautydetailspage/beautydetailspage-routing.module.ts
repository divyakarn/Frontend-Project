import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeautydetailspagePage } from './beautydetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: BeautydetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeautydetailspagePageRoutingModule {}
