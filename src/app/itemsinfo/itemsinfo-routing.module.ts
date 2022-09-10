import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsinfoPage } from './itemsinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsinfoPageRoutingModule {}
