import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeDePaiementPageRoutingModule } from './mode-de-paiement-routing.module';

import { ModeDePaiementPage } from './mode-de-paiement.page';

//import { IonicStorageModule } from '@ionic/storage';
//import { Storage } from '@ionic/storage';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    ModeDePaiementPageRoutingModule
  ],
  declarations: [ModeDePaiementPage]
})
export class ModeDePaiementPageModule {}
