import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeDePaiementPage } from './mode-de-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: ModeDePaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeDePaiementPageRoutingModule {}
