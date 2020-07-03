import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipDetailPageRoutingModule } from './recip-detail-routing.module';

import { RecipDetailPage } from './recip-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipDetailPageRoutingModule
  ],
  declarations: [RecipDetailPage]
})
export class RecipDetailPageModule {}
