import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestsPageRoutingModule } from './tests-routing.module';

import { TestsPage } from './tests.page';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TestsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TestsPage],
  //providers: [DetailsUploadComponent, FormUploadComponent, ListUploadComponent],
  //bootstrap: [TestsPageModule]
})
export class TestsPageModule {}
