import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithoutEquipmentPage } from './without-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: WithoutEquipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithoutEquipmentPageRoutingModule {}
