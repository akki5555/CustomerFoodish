import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { MyordersPageRoutingModule } from './myorders-routing.module';

import { MyordersPage } from './myorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MyordersPageRoutingModule
  ],
  declarations: [MyordersPage]
})
export class MyordersPageModule {}
