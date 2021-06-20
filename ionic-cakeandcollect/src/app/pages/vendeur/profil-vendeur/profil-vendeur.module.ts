import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilVendeurPageRoutingModule } from './profil-vendeur-routing.module';

import { ProfilVendeurPage } from './profil-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilVendeurPageRoutingModule
  ],
  declarations: [ProfilVendeurPage]
})
export class ProfilVendeurPageModule {}
