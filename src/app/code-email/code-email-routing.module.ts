import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeEmailPage } from './code-email.page';

const routes: Routes = [
  {
    path: '',
    component: CodeEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeEmailPageRoutingModule {}
