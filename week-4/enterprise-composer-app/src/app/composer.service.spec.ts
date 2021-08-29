/*
============================================
; Title:  composer.service.spec.ts
; Author: Professor Krasso
; Date:   27 August 2021
; Modified By: Soliman Elmalak
; Description: Assignment 4.4 – Async Pipe - Service class for Composer objects
============================================
*/
import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
