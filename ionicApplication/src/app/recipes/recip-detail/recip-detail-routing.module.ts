import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipDetailPage } from './recip-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecipDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipDetailPageRoutingModule {}
