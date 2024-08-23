import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'nutrition',
        loadChildren: () => import('../pages/nutrition/nutrition.module').then(m => m.NutritionPageModule)
      },
      {
        path: 'imc',
        loadChildren: () => import('../pages/imc/imc.module').then(m => m.IMCPageModule)
      },
      {
        path: 'with-equipment',
        loadChildren: () => import('../pages/with-equipment/with-equipment.module').then(m => m.WithEquipmentPageModule)
      },
      {
        path: 'without-equipment',
        loadChildren: () => import('../pages/without-equipment/without-equipment.module').then(m => m.WithoutEquipmentPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/nutrition',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
