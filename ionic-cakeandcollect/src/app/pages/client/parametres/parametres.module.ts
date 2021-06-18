import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametresPageRoutingModule } from './parametres-routing.module';

import { ParametresPage } from './parametres.page';
import { Device } from '@ionic-native/device/ngx';
import { ProfilClientPage } from '../profil-client/profil-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ParametresPageRoutingModule
  ],
  declarations: [ParametresPage, ProfilClientPage],
  providers: [Device]
})
export class ParametresPageModule {}
