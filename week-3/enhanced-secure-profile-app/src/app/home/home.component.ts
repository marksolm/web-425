/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   22 August 2021
; Modified By: Soliman Abdelmalak
; Description: Home component
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
	
/* Export HomeComponent */
export class HomeComponent implements OnInit {

  // Create the component with ActivatedRoute
  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  }

}