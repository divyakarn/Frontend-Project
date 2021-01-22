import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectridetailspagePageRoutingModule } from './electridetailspage-routing.module';

import { ElectridetailspagePage } from './electridetailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectridetailspagePageRoutingModule
  ],
  declarations: [ElectridetailspagePage]
})
export class ElectridetailspagePageModule {}
