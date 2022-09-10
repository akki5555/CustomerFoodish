import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendbankPage } from './sendbank.page';

const routes: Routes = [
  {
    path: '',
    component: SendbankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendbankPageRoutingModule {}
