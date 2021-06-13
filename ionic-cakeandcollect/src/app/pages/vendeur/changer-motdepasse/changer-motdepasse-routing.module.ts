import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangerMotdepassePage } from './changer-motdepasse.page';

const routes: Routes = [
  {
    path: '',
    component: ChangerMotdepassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangerMotdepassePageRoutingModule {}
