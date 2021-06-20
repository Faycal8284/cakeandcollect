import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilVendeurPage } from './profil-vendeur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilVendeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilVendeurPageRoutingModule {}
