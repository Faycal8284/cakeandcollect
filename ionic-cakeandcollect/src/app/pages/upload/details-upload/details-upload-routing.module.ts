import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsUploadComponent } from './details-upload.component';

import { DetailsUploadPage } from './details-upload.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, DetailsUploadComponent],
})
export class DetailsUploadPageRoutingModule {}
