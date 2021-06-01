import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatisseriePageRoutingModule } from './patisserie-routing.module';

import { PatisseriePage } from './patisserie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatisseriePageRoutingModule
  ],
  declarations: [PatisseriePage]
})
export class PatisseriePageModule {}
