/*
============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date:   18 September 2021
; Modified By: Soliman Elmalak
; Description: Sign-In Component
============================================
*/

// import statements
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  //Add a variable named form of type FormGroup
  signinForm: FormGroup;
  //Add a variable named errorMessage of type string
  errorMessage: string;
  // Add references to the Router, CookieService, FormBuilder, and SignInService
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
  }

  ngOnInit(): void {
    // create a studentId FormGroup with on FormControl
    this.signinForm = this.fb.group({
      studentId:["", Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

  // get function that returns the signinForm controls
  get form() {
    return this.signinForm.controls;
  }

  // Add onSubmit() function to get studentId value from studentId FormControl
  onSubmit() {

    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);
    // create an if statement that compares the returned value from the signinService.validate() function.  
    if (this.signinService.validate(studentId)) {
      // set the cookie
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate([ '/' ])

    }else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }
}