import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestsPageRoutingModule } from './tests-routing.module';

import { TestsPage } from './tests.page';
import { DetailsUploadComponent } from 'src/app/upload/details-upload/details-upload.component';
import { FormUploadComponent } from 'src/app/upload/form-upload/form-upload.component';
import { ListUploadComponent } from 'src/app/upload/list-upload/list-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsPageRoutingModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [TestsPage],
  //providers: [DetailsUploadComponent, FormUploadComponent, ListUploadComponent],
  //bootstrap: [TestsPageModule]
})
export class TestsPageModule {}
