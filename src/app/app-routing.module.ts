import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterlayoutComponent } from './component/layout/outerlayout/outerlayout.component';
import { AdminlayoutComponent } from './component/layout/adminlayout/adminlayout.component';

const routes: Routes = [
  {
    path: '',
    component: OuterlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/outer/outer.module').then(
          (m) => m.OuterModule
        ),
      },
    ]

  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/admin/admin.module')
          .then(m => m.AdminModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
