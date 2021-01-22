import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectripagePageRoutingModule } from './electripage-routing.module';

import { ElectripagePage } from './electripage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectripagePageRoutingModule
  ],
  declarations: [ElectripagePage]
})
export class ElectripagePageModule {}
