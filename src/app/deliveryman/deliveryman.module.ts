import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { DeliverymanPageRoutingModule } from './deliveryman-routing.module';

import { DeliverymanPage } from './deliveryman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    DeliverymanPageRoutingModule
  ],
  declarations: [DeliverymanPage]
})
export class DeliverymanPageModule {}
