/*
============================================
; Title:  book.interface.ts 
; Author: Professor Krasso
; Date:   03 September 2021
; Modified By: Soliman Abdelmalak
; Description: Using Angular Material to implement navigation, color theming, and working with flex-layout.
============================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
