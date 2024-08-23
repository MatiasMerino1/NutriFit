import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithEquipmentPage } from './with-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: WithEquipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithEquipmentPageRoutingModule {}
