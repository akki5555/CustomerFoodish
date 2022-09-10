import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
 
import { IonicModule } from '@ionic/angular';

import { OrderInfo2PageRoutingModule } from './order-info2-routing.module';

import { OrderInfo2Page } from './order-info2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    OrderInfo2PageRoutingModule
  ],
  declarations: [OrderInfo2Page]
})
export class OrderInfo2PageModule {}
