import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstateComponent } from './addstate/addstate.component';
import { EditstateComponent } from './editstate/editstate.component';
import { ListstateComponent } from './liststate/liststate.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddstateComponent
  },
  {
    path : 'edit',
    component : EditstateComponent
  },
  {
    path : 'list',
    component : ListstateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
