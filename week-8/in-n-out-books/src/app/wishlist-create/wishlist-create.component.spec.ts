/*
============================================
; Title:  wishlist-create.component.spec.ts
; Author: Professor Krasso
; Date:   23 September 2021
; Modified By: Soliman Elmalak
; Description: wishlist-create.component
============================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCreateComponent } from './wishlist-create.component';

describe('WishlistCreateComponent', () => {
  let component: WishlistCreateComponent;
  let fixture: ComponentFixture<WishlistCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
