import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { ItemsinfoPageRoutingModule } from './itemsinfo-routing.module';

import { ItemsinfoPage } from './itemsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    ItemsinfoPageRoutingModule
  ],
  declarations: [ItemsinfoPage]
})
export class ItemsinfoPageModule {}
