import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsUploadComponent } from '../details-upload/details-upload.component';

import { ListUploadPage } from './list-upload.page';

const routes: Routes = [
  {
    path: '',
    component: ListUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DetailsUploadComponent]

})
export class ListUploadPageRoutingModule {}
