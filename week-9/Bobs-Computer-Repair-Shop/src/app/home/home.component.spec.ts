import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/** 
=============================================================
; Title:  home.component.spec.ts
; Author: Professor Krasso
; Date:   30 september 2021
; Modified By: Soliman Elmalak
; Description: home.component 
; =============================================================
*/

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
