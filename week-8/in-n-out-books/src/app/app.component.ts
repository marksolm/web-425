/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: App component
============================================
*/

// Import required module from Angular */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Export this as AppComponent and define the assignment name for the HTML to pull in. */
export class AppComponent {

  assignment: string;

//Create an assignment variable 
  constructor() {
    this.assignment = "Welcome to In-N-Out-Books ";
  }
}