/**
 ============================================
 ;  Title: app.component.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 06 August 2021
 ;  Description: app component
 ;  ============================================
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Assignment 1.5 - Components';
}
