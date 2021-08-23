/*
============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date:   22 August 2021
; Modified By: Soliman Abdelmalak
; Description: sign-in.component 
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

/* Export a SignInComponent */
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  /* Add the Router to the guards constructor  */
  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  /* Add a sign in function */
  signin() {
    this.isLoggedIn= true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}