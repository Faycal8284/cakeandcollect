import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangerMotdepassePageRoutingModule } from './changer-motdepasse-routing.module';

import { ChangerMotdepassePage } from './changer-motdepasse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChangerMotdepassePageRoutingModule
  ],
  declarations: [ChangerMotdepassePage]
})
export class ChangerMotdepassePageModule {}
