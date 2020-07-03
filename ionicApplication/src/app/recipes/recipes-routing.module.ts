import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  },
  {
    path: 'recip-detail',
    loadChildren: () => import('./recip-detail/recip-detail.module').then( m => m.RecipDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
