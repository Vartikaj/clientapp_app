import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxSpinnerModule } from "ngx-spinner";
import { OuterRoutingModule } from './outer-routing.module';

import { AuthService } from '../../services/auth.service';

import { StudentAuthService } from '../../services/studentauth.service';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSingupComponent } from './admin-singup/admin-singup.component';
import { AdminResetpwdComponent } from './admin-resetpwd/admin-resetpwd.component';

import { AdminLoginOTPComponent } from './admin-otplogin/admin-otplogin.component';


import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSingupComponent } from './student-singup/student-singup.component';
import { StudentLoginOTPComponent } from './student-otplogin/student-otplogin.component';
import { StudentForgotpwdComponent } from './student-forgotpwd/student-forgotpwd.component';
import { AdminForgotpwdComponent } from './admin-forgotpwd/admin-forgotpwd.component';
@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminSingupComponent,
    AdminResetpwdComponent,
    AdminLoginOTPComponent,
    StudentLoginComponent,
    StudentSingupComponent,
    StudentLoginOTPComponent,
    StudentForgotpwdComponent,
    AdminForgotpwdComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OuterRoutingModule,
    NgxSpinnerModule,

  ],
  providers: [AuthService, StudentAuthService]
})
export class OuterModule { }
