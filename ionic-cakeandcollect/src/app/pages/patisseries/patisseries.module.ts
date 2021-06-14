import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ToastController } from '@ionic/angular';

import { PatisseriesPageRoutingModule } from './patisseries-routing.module';

import { PatisseriesPage } from './patisseries.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatisseriesPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    ToastController],
    declarations: [PatisseriesPage]

})
export class PatisseriesPageModule {}
