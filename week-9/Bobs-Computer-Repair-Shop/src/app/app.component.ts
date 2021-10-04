/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   03 October 2021
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
export class AppComponent {
  assignment: string = "Bob's Computer Repair Shop";
}