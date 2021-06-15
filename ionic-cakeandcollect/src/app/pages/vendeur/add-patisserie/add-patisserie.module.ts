import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPatisseriePageRoutingModule } from './add-patisserie-routing.module';

import { AddPatisseriePage } from './add-patisserie.page';
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPatisseriePageRoutingModule,
  ],
  declarations: [AddPatisseriePage],
  //providers: [FileChooser]
})
export class AddPatisseriePageModule {}
