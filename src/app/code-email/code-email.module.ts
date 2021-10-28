import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeEmailPageRoutingModule } from './code-email-routing.module';

import { CodeEmailPage } from './code-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeEmailPageRoutingModule
  ],
  declarations: [CodeEmailPage]
})
export class CodeEmailPageModule {}
