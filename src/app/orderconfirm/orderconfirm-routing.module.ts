import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderconfirmPage } from './orderconfirm.page';

const routes: Routes = [
  {
    path: '',
    component: OrderconfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderconfirmPageRoutingModule {}
