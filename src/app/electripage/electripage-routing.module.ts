import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectripagePage } from './electripage.page';

const routes: Routes = [
  {
    path: '',
    component: ElectripagePage
  },
  {
    path: 'electridetailspage',
    loadChildren: () => import('./electridetailspage/electridetailspage.module').then( m => m.ElectridetailspagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectripagePageRoutingModule {}
