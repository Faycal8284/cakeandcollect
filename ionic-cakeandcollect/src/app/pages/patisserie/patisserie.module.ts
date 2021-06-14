import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatisseriePageRoutingModule } from './patisserie-routing.module';

import { PatisseriePage } from './patisserie.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatisseriePageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [PatisseriePage]
})
export class PatisseriePageModule {}
