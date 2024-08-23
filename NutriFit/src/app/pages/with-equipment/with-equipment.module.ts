import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithEquipmentPageRoutingModule } from './with-equipment-routing.module';

import { WithEquipmentPage } from './with-equipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithEquipmentPageRoutingModule
  ],
  declarations: [WithEquipmentPage]
})
export class WithEquipmentPageModule {}
