import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { AddstateComponent } from './addstate/addstate.component';
import { EditstateComponent } from './editstate/editstate.component';
import { ListstateComponent } from './liststate/liststate.component';


@NgModule({
  declarations: [
    AddstateComponent,
    EditstateComponent,
    ListstateComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule
  ]
})
export class StateModule { }
