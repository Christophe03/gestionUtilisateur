import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauPassPageRoutingModule } from './nouveau-pass-routing.module';

import { NouveauPassPage } from './nouveau-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauPassPageRoutingModule
  ],
  declarations: [NouveauPassPage]
})
export class NouveauPassPageModule {}
