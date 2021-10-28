import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauPassPage } from './nouveau-pass.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauPassPageRoutingModule {}
