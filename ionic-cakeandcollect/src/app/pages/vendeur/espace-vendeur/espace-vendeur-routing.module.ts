import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceVendeurPage } from './espace-vendeur.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceVendeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceVendeurPageRoutingModule {}
