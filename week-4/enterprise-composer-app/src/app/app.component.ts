/** 
=============================================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   13 August 2021
; Modified By: Soliman Elmalak
; Description: App component
; =============================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignment 4.4 - Async Pipe";
}
