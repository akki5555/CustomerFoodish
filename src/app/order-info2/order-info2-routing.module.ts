import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderInfo2Page } from './order-info2.page';

const routes: Routes = [
  {
    path: '',
    component: OrderInfo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderInfo2PageRoutingModule {}
