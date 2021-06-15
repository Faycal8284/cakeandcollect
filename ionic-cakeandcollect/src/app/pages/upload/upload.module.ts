import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPageRoutingModule } from './upload-routing.module';

import { UploadPage } from './upload.page';
import { DetailsUploadPage } from './details-upload/details-upload.page';
import { FormUploadPage } from './form-upload/form-upload.page';
import { ListUploadPage } from './list-upload/list-upload.page';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DetailsUploadComponent } from './details-upload/details-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UploadPage],
  //providers: [DetailsUploadComponent]
})
export class UploadPageModule {}
