import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectridetailspagePage } from './electridetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: ElectridetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectridetailspagePageRoutingModule {}
