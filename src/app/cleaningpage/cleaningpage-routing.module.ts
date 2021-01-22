
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleaningpagePage } from './cleaningpage.page';

const routes: Routes = [
  {
    path: '',
    component: CleaningpagePage
  },
  {
    path: 'cleaningdetailspage',
    loadChildren: () => import('./cleaningdetailspage/cleaningdetailspage.module').then( m => m.CleaningdetailspagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CleaningpagePageRoutingModule { }
