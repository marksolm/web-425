/*
; Title:  books.service.ts
; Author: Professor Krasso
; Date:   24 September 2021
; Modified By: Soliman Abdelmalak
; Description: Service class for book objects
*/

/* Import required module from Angular */
import { Injectable } from '@angular/core';

// Add an import statement for the HttpClient and HttpParams
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Export as BookService.
export class BooksService {
  isbns: Array<string> = [
   "0345339681",
   "0261103571",
   "9780593099322",
   "9780261102361",
   "9780261102378",
   "9780590302715",
   "9780316769532",
   "9780743273565",
   "9780590405959"
 ]

 constructor(private http: HttpClient) { }

 // Create a getBooks function.
 getBooks() {
   // Create a new variable named params of type HttpParams 
   let params = new HttpParams();
   // Using the params.append function 
   params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
   params = params.append('format', 'json');
   params = params.append('jscmd', 'details');

   //Rreturn the http.get function passing in the openlibrary url and the params object 
   return this.http.get('https://openlibrary.org/api/books', {params: params})
 }
}
