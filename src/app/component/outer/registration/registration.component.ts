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
  hide = true;
  hideconf = true;

  constructor (private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      'fullName': [null, [Validators.required, Validators.pattern('[a-zA-Z .]*')]],
      'username' : [null, [Validators.required, Validators.pattern('[a-zA-Z .]*')]],
      'email' : [null, [Validators.required, Validators.email]],
      'phoneNumber' : [null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]],
      'password' : [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/), Validators.maxLength(20), Validators.minLength(8)]],
      'confirmPassword' : [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/), Validators.maxLength(20), Validators.minLength(8)]]
    }, {
      validator : ConfirmedValidator('password', 'confirmPassword')
    });

    this.hide= true;
    this.hideconf = true;
  }

  submit(){
    this.submitted = true;
    if(this.registrationForm.invalid) {
      return;
    }
    localStorage.setItem('Persondata', JSON.stringify(this.registrationForm.value));
    alert('SUCCESS!!' + JSON.stringify(this.registrationForm.value,null,4))
  }
}

function ConfirmedValidator(controlName: string, matchingControlName: string): any {
  return (formGroup : FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if(matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
      return;
    }

    if(control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator : true })
    } else {
      matchingControl.setErrors(null);
    }
  }
}

