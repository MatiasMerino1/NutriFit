import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithoutEquipmentPageRoutingModule } from './without-equipment-routing.module';

import { WithoutEquipmentPage } from './without-equipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithoutEquipmentPageRoutingModule
  ],
  declarations: [WithoutEquipmentPage]
})
export class WithoutEquipmentPageModule {}
