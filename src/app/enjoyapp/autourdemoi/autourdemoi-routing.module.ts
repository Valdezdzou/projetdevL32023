import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutourdemoiPage } from './autourdemoi.page';

const routes: Routes = [
  {
    path: '',
    component: AutourdemoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutourdemoiPageRoutingModule {}
