import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginVendeurPageRoutingModule } from './login-vendeur-routing.module';

import { LoginVendeurPage } from './login-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginVendeurPageRoutingModule
  ],
  declarations: [LoginVendeurPage]
})
export class LoginVendeurPageModule {}
