/*
============================================
; Title:  gpa.component.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: gpa.component
============================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}
