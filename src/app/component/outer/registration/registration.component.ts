import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  registrationForm !: FormGroup;
  submitted = false;

  constructor (private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      'fullName': [null, [Validators.required, Validators.pattern('[a-zA-Z .]*')]],
      'username' : [null, [Validators.required, Validators.pattern('[a-zA-Z .]*')]],
      'email' : [null, [Validators.required, Validators.email]],
      'phoneNumber' : [null, [Validators.required, Validators.pattern('^[0-9]*'), Validators.maxLength(10)]],
      'password' : [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/), Validators.maxLength(20), Validators.minLength(8)]],
      'confirmPassword' : [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/), Validators.maxLength(20), Validators.minLength(8)]]

    })
  }

  // get validators(){
  //   return this.registrationForm.controls; 
  // }

  submit(){
    this.submitted = true;
    if(this.registrationForm.invalid) {
      return;
    }
    localStorage.setItem('Persondata', JSON.stringify(this.registrationForm.value));
    alert('SUCCESS!!' + JSON.stringify(this.registrationForm.value,null,4))

  }

}
