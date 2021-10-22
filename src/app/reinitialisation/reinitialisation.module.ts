import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinitialisationPageRoutingModule } from './reinitialisation-routing.module';

import { ReinitialisationPage } from './reinitialisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitialisationPageRoutingModule
  ],
  declarations: [ReinitialisationPage]
})
export class ReinitialisationPageModule {}
