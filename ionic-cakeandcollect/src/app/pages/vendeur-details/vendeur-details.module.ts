import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurDetailsPageRoutingModule } from './vendeur-details-routing.module';

import { VendeurDetailsPage } from './vendeur-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurDetailsPageRoutingModule
  ],
  declarations: [VendeurDetailsPage]
})
export class VendeurDetailsPageModule {}
