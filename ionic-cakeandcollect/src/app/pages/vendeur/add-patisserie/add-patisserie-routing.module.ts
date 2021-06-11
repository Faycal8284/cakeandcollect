import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatisseriePage } from './add-patisserie.page';

const routes: Routes = [
  {
    path: '',
    component: AddPatisseriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPatisseriePageRoutingModule {}
