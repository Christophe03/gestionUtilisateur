import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinitialisationPage } from './reinitialisation.page';

const routes: Routes = [
  {
    path: '',
    component: ReinitialisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinitialisationPageRoutingModule {}
