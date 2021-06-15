import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadPage } from './upload.page';

const routes: Routes = [
  {
    path: '',
    component: UploadPage
  },
  {
    path: 'form-upload',
    loadChildren: () => import('./form-upload/form-upload.module').then( m => m.FormUploadPageModule)
  },
  {
    path: 'list-upload',
    loadChildren: () => import('./list-upload/list-upload.module').then( m => m.ListUploadPageModule)
  },
  {
    path: 'details-upload',
    loadChildren: () => import('./details-upload/details-upload.module').then( m => m.DetailsUploadPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadPageRoutingModule {}
