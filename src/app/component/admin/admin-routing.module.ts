import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then(m => m.CityModule),
  },
  {
    path : 'state',
    loadChildren : () => import('./state/state.module').then(m => m.StateModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
