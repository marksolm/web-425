/*
============================================
; Title:  base-layout.component.ts 
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: App component
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  assignment : string;

  // Define the assignment name
  constructor() { 
    this.assignment = "Exercise 6.3 - Layouts";
  }

  ngOnInit(): void {
  }

}
