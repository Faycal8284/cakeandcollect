import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccueilPageRoutingModule } from './accueil-routing.module';
import { AccueilPage } from './accueil.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccueilPageRoutingModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
