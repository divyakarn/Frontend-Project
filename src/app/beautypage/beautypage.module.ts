import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeautypagePageRoutingModule } from './beautypage-routing.module';

import { BeautypagePage } from './beautypage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeautypagePageRoutingModule
  ],
  declarations: [BeautypagePage]
})
export class BeautypagePageModule {}
