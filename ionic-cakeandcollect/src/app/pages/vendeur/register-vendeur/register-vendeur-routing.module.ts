import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterVendeurPage } from './register-vendeur.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterVendeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterVendeurPageRoutingModule {}
