import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooddetailspagePageRoutingModule } from './fooddetailspage-routing.module';

import { FooddetailspagePage } from './fooddetailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooddetailspagePageRoutingModule
  ],
  declarations: [FooddetailspagePage]
})
export class FooddetailspagePageModule {}
