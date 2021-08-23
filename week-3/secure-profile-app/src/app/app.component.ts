/**
 ============================================
 ;  Title: app.component.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 13 August 2021
 ;  Description: Assignment 2.3 - Data Binding
 ;  ============================================
 */

 /* Import required module from Angular */
 import { Component } from '@angular/core';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
 })
 /* Define a isLoggedIn  variable, and define the assignment name for the HTML . */
 export class AppComponent {
  title: string = 'Secure Profile App’';
 }
 