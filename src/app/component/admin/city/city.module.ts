import { NgModule } from '@angular/core';

import { AddcityComponent } from './addcity/addcity.component';
import { EditcityComponent } from './editcity/editcity.component';
import { ListcityComponent } from './listcity/listcity.component';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityRoutingModule } from './city.routing.module';

@NgModule({
    imports: [CityRoutingModule, CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AddcityComponent, EditcityComponent, ListcityComponent],
    providers: []

})
export class CityModule { }
