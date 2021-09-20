/*
============================================
; Title:  grade-summary.component.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: App component
============================================
*/

/*Add an import statement*/
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent implements OnInit {
    /* Add two input values: grade and course */
    @Input() grade: string;
    @Input() course: string;
  constructor() { }

  ngOnInit(): void {
  }

}