/*
============================================
; Title:  books.service.spec.ts
; Author: Professor Krasso
; Date:   03 September 2021
; Modified By: Soliman Abdelmalak
; Description: books service
*/
import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
