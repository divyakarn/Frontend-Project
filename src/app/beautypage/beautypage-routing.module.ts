import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeautypagePage } from './beautypage.page';

const routes: Routes = [
  {
    path: '',
    component: BeautypagePage
  },
  {
    path: 'beautydetailspage',
    loadChildren: () => import('./beautydetailspage/beautydetailspage.module').then( m => m.BeautydetailspagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeautypagePageRoutingModule {}
