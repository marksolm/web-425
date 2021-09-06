/*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date:   02 September 2021
; Modified By: Soliman Elmalak
; Description: Book list component (book list page
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

/* Reactive Extensions for JavaScript modules. */
import { Observable } from 'rxjs';

/* Import Application Modules and Components */
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Export as BookListComponent and implement at initialization.
export class BookListComponent implements OnInit {

  // Create an Observable Array of books as IBook, a header containing and array of book values, and a book variable of type IBook.
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = booksService.getBooks();
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}