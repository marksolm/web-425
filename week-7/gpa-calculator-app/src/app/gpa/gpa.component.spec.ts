/*
============================================
; Title:  gpa.component.spec.ts
; Author: Professor Krasso
; Date:   18 September 2021
; Modified By: Soliman Elmalak
; Description: gpa.component.spec
============================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaComponent } from './gpa.component';

describe('GpaComponent', () => {
  let component: GpaComponent;
  let fixture: ComponentFixture<GpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
