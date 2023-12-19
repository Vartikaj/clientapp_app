import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuterRoutingModule } from './outer-routing.module';
import { LoginComponent } from './login/login.component';
import { OuterHeaderComponent } from '../layout/outerlayout/header/header.component';
import { OuterFooterComponent } from '../layout/outerlayout/footer/footer.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    OuterRoutingModule,
  ]
})
export class OuterModule { }
