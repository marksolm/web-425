/*
============================================
; Title:  sign-in.service.ts
; Author: Professor Krasso
; Date:   17 September 2021
; Modified By: Soliman Elmalak
; Description: Sign-In Service
============================================
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  //add a studentIds variable of type Array<number>
  studentId: Array<number>;
  constructor() {
   // populate the array with values
    this.studentId = [
      1007,
      1008,
      1009,
      1010,
      1011,
      1012
    ]
  }
     // Add a validate function(studentId: number)
    validate(studentId: number) {
      //return true if you find a match and false if not. 
      return this.studentId.some(id => id === studentId);
    }
 
}