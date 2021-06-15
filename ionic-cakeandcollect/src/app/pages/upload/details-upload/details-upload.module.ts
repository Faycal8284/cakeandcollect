import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsUploadPageRoutingModule } from './details-upload-routing.module';

import { DetailsUploadPage } from './details-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsUploadPageRoutingModule
  ],
  declarations: [DetailsUploadPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //schemas: [NO_ERRORS_SCHEMA]
  exports: [DetailsUploadPage]
})
export class DetailsUploadPageModule {}
