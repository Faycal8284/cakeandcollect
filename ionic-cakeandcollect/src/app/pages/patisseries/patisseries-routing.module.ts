import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatisseriesPage } from './patisseries.page';

const routes: Routes = [
  {
    path: '',
    component: PatisseriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatisseriesPageRoutingModule {}
