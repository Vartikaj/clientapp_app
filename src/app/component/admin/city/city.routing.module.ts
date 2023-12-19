import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddcityComponent } from './addcity/addcity.component';
import { EditcityComponent } from './editcity/editcity.component';
import { ListcityComponent } from './listcity/listcity.component';
const changepwdRoute: Routes = [
    {
        path: 'add',
        component: AddcityComponent,
    },
    {
        path: 'edit',
        component: EditcityComponent,
    }
    ,
    {
        path: 'list',
        component: ListcityComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(changepwdRoute)],
    exports: [RouterModule],
})
export class CityRoutingModule { }
