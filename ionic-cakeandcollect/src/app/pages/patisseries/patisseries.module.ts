import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ToastController } from '@ionic/angular';

import { PatisseriesPageRoutingModule } from './patisseries-routing.module';

import { PatisseriesPage } from './patisseries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatisseriesPageRoutingModule
  ],
  providers: [
    ToastController]
})
export class PatisseriesPageModule {}
