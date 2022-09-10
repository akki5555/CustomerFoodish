import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { VerificaionPageRoutingModule } from './verificaion-routing.module';

import { VerificaionPage } from './verificaion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      TranslateModule,
    VerificaionPageRoutingModule
  ],
  declarations: [VerificaionPage]
})
export class VerificaionPageModule {}
