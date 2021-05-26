import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceClientPageRoutingModule } from './espace-client-routing.module';

import { EspaceClientPage } from './espace-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceClientPageRoutingModule
  ],
  declarations: [EspaceClientPage]
})
export class EspaceClientPageModule {}
