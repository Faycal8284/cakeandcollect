import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthScreenClientPage } from './auth-screen-client.page';

const routes: Routes = [
  {
    path: '',
    component: AuthScreenClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthScreenClientPageRoutingModule {}
