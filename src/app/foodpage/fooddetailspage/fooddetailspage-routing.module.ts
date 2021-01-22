import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooddetailspagePage } from './fooddetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: FooddetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooddetailspagePageRoutingModule {}
