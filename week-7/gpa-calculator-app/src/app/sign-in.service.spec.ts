/*
============================================
; Title:  sign-in.service.spec.ts
; Author: Professor Krasso
; Date:   17 September 2021
; Modified By: Soliman Elmalak
; Description: sign-in.service
============================================
*/
import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
