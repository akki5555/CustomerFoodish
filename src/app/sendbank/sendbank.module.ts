import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { SendbankPageRoutingModule } from './sendbank-routing.module';

import { SendbankPage } from './sendbank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    SendbankPageRoutingModule
  ],
  declarations: [SendbankPage]
})
export class SendbankPageModule {}
