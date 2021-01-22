import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeautydetailspagePageRoutingModule } from './beautydetailspage-routing.module';

import { BeautydetailspagePage } from './beautydetailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeautydetailspagePageRoutingModule
  ],
  declarations: [BeautydetailspagePage]
})
export class BeautydetailspagePageModule {}
