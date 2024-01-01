import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutourdemoiPageRoutingModule } from './autourdemoi-routing.module';

import { AutourdemoiPage } from './autourdemoi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutourdemoiPageRoutingModule
  ],
  declarations: [AutourdemoiPage]
})
export class AutourdemoiPageModule {}
