import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccueilPageRoutingModule } from './accueil-routing.module';
import { AccueilPage } from './accueil.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccueilPageRoutingModule,
    IonicHeaderParallaxModule,
    Ng2SearchPipeModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
