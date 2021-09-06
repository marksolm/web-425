/*
============================================
; Title:  book-list.component.spec.ts
; Author: Professor Krasso
; Date:   02 September 2021
; Modified By: Soliman Elmalak
; Description: Assignment 5.4 - Dialogs
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  // Add variable book with type of IBook
  book: IBook;
  
  /* Add the MatDialogRef and MAT_DIALOG_DATA to the components constructor */
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
