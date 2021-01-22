import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleaningdetailspagePage } from './cleaningdetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: CleaningdetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CleaningdetailspagePageRoutingModule {}
