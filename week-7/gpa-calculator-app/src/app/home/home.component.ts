/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: home.component 
============================================
*/

/* Import required modules and components */
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validator, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* Create variables */
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  /* Add a variable named transcriptForm variable of type FormGroup */ 
  transcriptForm: FormGroup;

  /*Add the FormBuilder to the components constructor */
  constructor( private fb:FormBuilder) {

  }


  ngOnInit(): void {
    this.transcriptForm= this.fb.group({course: ["", Validators.required],
    grade:["", Validators.required]});  
  }
  get form() {return this.transcriptForm.controls;}

/* Create saveEntry function, push a transcriptEntry to the transcriptEntries array*/
onSubmit(event) {
  this.transcriptEntries.push({
    course:this.form.course.value,
    grade:this.form.grade.value
  });
  /* use the event object to reset Validation */
  event.currentTarget.reset();
}


/* Create calculate to Calculate the grade point average*/
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      switch(entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa +=3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // Clear the Transcript Entries
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}