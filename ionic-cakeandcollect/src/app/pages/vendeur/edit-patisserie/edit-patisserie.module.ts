import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPatisseriePageRoutingModule } from './edit-patisserie-routing.module';

import { EditPatisseriePage } from './edit-patisserie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditPatisseriePageRoutingModule
  ],
  declarations: [EditPatisseriePage]
})
export class EditPatisseriePageModule {}
