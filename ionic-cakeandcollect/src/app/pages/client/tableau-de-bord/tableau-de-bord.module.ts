import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableauDeBordPageRoutingModule } from './tableau-de-bord-routing.module';

import { TableauDeBordPage } from './tableau-de-bord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableauDeBordPageRoutingModule
  ],
  declarations: [TableauDeBordPage]
})
export class TableauDeBordPageModule {}
