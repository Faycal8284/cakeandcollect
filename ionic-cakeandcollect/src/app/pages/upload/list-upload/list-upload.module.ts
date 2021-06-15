import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUploadPageRoutingModule } from './list-upload-routing.module';

import { ListUploadPage } from './list-upload.page';
import { DetailsUploadPageModule } from '../details-upload/details-upload.module';
import { DetailsUploadComponent } from '../details-upload/details-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListUploadPageRoutingModule,
  ],
  declarations: [ListUploadPage, DetailsUploadComponent],
  providers: [DetailsUploadComponent]
})
export class ListUploadPageModule {}
