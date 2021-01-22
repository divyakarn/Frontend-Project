import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleaningdetailspagePageRoutingModule } from './cleaningdetailspage-routing.module';

import { CleaningdetailspagePage } from './cleaningdetailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleaningdetailspagePageRoutingModule
  ],
  declarations: [CleaningdetailspagePage]
})
export class CleaningdetailspagePageModule {}
