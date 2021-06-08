import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthScreenClientPageRoutingModule } from './auth-screen-client-routing.module';

import { AuthScreenClientPage } from './auth-screen-client.page';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthScreenClientPageRoutingModule
  ],
  declarations: [AuthScreenClientPage, SignInComponent, SignUpComponent]
})
export class AuthScreenClientPageModule {}
