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

  //Create an Array of books as IBook and a book variable.
  books: Array<IBook> = [];
  book: IBook;
   
  constructor(private booksService: BooksService, private dialog: MatDialog) {
      // In the constructors body subscribe the getBooks() function 
    this.booksService.getBooks().subscribe(res=> {
      for (let key in res) {
        // using a for...in loop and check if the res.hasOwnProperty(key) is true
        if (res.hasOwnProperty(key)) {
            let authors = [];
          if (res[key].details.authors) {
              authors = res[key].details.authors.map(function(author) {
              return author.name;
          })
        }
            //push a new object to the books array 
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }  
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);

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