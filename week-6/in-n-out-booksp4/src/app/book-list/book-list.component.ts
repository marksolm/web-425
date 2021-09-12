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

/* Add an import statement for the MatDialog. */
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

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
   
 /* Add the MatDialog class to the components constructor  */
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = booksService.getBooks();
  }

  ngOnInit(): void {
  }  
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    /*create a dialogRef object and assign it to the dialog.open() function*/
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      /*create a new object literal called data and a nested object literal called book */
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);
    
    /*Call the afterClosed() function and set the book variable to null */
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm')
        {this.book = null;}
      }
    );
  }
}