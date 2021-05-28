import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurDetailsPage } from './vendeur-details.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurDetailsPageRoutingModule {}
