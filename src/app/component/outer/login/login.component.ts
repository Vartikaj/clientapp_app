import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted = false;
  constructor (private formbuilder : FormBuilder) { 

  }
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      'username' : [null, [Validators.required, Validators.pattern('[a-zA-Z .]*')]],
      'password' : [null, [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/)]]
    })
  }

  get validators() {
    return this.loginForm.controls;
  }

  submit() {
    this.submitted = true;
  }
  
}
