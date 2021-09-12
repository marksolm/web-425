/*
; Title:  books.service.ts
; Author: Professor Krasso
; Date:   03 September 2021
; Modified By: Soliman Abdelmalak
; Description: Service class for book objects
*/

/* Import required module from Angular */
import { Injectable } from '@angular/core';

/* o	Import the Observable, of operator, and map operator classes from rxjs. */
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/* Import the IBook interface */
import { IBook } from './book.interface';
@Injectable({
  providedIn: 'root'
})

// Export as BookService.
export class BooksService {
  // Add a books variable of type Observable<IBook>
  books: Array<IBook>;
  // Add a books variable of type Observable<IBook>
  constructor() {
    // create 5 new book objects and prefill them with your favorite books.
    this.books = [
      { 
        isbn: '9780446310789',
        title: 'To Kill a Mockingbird',
        description: 'One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture.',
        numOfPages: 384,
        authors: ['Harper Lee']
      },
      {
        isbn: '9780995363427',
        title: 'God and Man',
        description: 'On God’s attributes, you will read about God the Creator, the Eternal, the Unlimited, the Omnipresent and the Omnipotent.On God’s relationship with man, you will read about God’s love to man, His giving, His goodness, His kindness, His protection, His forgiveness, His Chastening, His dispensation, His great redemption.',
        numOfPages: 330,
        authors: ['Pope Shenouda III']
      },
      {
        isbn: '978-1617295348',
        title: 'Angular Development with TypeScript',
        description: 'Angular Development with TypeScript, Second Edition is an intermediate-level tutorial that introduces Angular and TypeScript to developers comfortable with building web applications using other frameworks and tools.',
        numOfPages: 560,
        authors: ['Fain, Y., & Moiseev, A.']
      },
      {
        isbn: '978-0143039433',
        title: 'The Grapes of Wrath',
        description: 'The Pulitzer Prize-winning epic of the Great Depression, a book that galvanized—and sometimes outraged—millions of readers.',
        numOfPages: 215,
        authors: ['John Steinbeck']
      },

      {
        isbn: '978-0596805524',
        title: 'JavaScript The Definitive Guide	',
        description: 'Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer guide and comprehensive reference to the core language and to the client side JavaScript APIs defined by web browsers',
        numOfPages: 687,
        authors: ['David Flanagan']
      }
    ]
  }

  // Create a getBooks function.
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Create a getBook function.
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}