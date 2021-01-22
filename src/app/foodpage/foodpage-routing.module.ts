import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodpagePage } from './foodpage.page';

const routes: Routes = [
  {
    path: '',
    component: FoodpagePage
  },
  {
    path: 'fooddetailspage',
    loadChildren: () => import('./fooddetailspage/fooddetailspage.module').then( m => m.FooddetailspagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodpagePageRoutingModule { }
