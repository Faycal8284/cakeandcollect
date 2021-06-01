import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatisseriePage } from './patisserie.page';

const routes: Routes = [
  {
    path: '',
    component: PatisseriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatisseriePageRoutingModule {}
