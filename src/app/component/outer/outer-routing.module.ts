import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path : 'Login',
    component : LoginComponent
  },
  {
    path : 'Registration',
    component : RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuterRoutingModule { }
