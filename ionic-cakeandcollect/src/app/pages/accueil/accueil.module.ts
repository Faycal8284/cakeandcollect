import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccueilPageRoutingModule } from './accueil-routing.module';
import { AccueilPage } from './accueil.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ParallaxHeaderDirective } from '../../directives/parallax-header.directive';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccueilPageRoutingModule,
    Ng2SearchPipeModule,
    IonicHeaderParallaxModule
  ],
  declarations: [AccueilPage, ParallaxHeaderDirective]
})
export class AccueilPageModule {}
