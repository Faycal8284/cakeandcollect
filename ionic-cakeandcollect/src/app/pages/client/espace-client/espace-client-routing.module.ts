import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceClientPage } from './espace-client.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceClientPageRoutingModule {}
