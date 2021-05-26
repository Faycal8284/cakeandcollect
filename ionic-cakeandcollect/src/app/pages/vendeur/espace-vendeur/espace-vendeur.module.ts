import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceVendeurPageRoutingModule } from './espace-vendeur-routing.module';

import { EspaceVendeurPage } from './espace-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceVendeurPageRoutingModule
  ],
  declarations: [EspaceVendeurPage]
})
export class EspaceVendeurPageModule {}
