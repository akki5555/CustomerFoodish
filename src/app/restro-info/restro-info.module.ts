import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
 
import { IonicModule } from '@ionic/angular';

import { RestroInfoPageRoutingModule } from './restro-info-routing.module';

import { RestroInfoPage } from './restro-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,	  
    RestroInfoPageRoutingModule
  ],
  declarations: [RestroInfoPage]
})
export class RestroInfoPageModule {}
