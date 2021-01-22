import { GoogleMapComponent } from './../google-map/google-map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleaningpagePageRoutingModule } from './cleaningpage-routing.module';

import { CleaningpagePage } from './cleaningpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleaningpagePageRoutingModule
  ],
  declarations: [CleaningpagePage, GoogleMapComponent]
})
export class CleaningpagePageModule { }
