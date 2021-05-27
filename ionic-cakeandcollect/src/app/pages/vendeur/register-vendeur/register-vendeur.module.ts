import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterVendeurPageRoutingModule } from './register-vendeur-routing.module';

import { RegisterVendeurPage } from './register-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterVendeurPageRoutingModule
  ],
  declarations: [RegisterVendeurPage]
})
export class RegisterVendeurPageModule {}
