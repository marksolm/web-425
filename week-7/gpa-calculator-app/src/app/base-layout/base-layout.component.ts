/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: base-layout.component
============================================
*/

/* Add an import statement  */
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  assignment : string;

  // Define the assignment name
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "GPA Calculator";
  }

  ngOnInit(): void {
  }
  //Add a new function named signOut() 
  signOut() {
     //call the cookieService.deleteAll function and then use the Router to navigate users to the sign-in page 
     this.cookieService.deleteAll();
     this.router.navigate(['/session/sign-in']);
    }
}
