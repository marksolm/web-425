/** 
=============================================================
; Title:  invoice-dialog.component.spec.ts
; Author: Professor Krasso
; Date:   30 september 2021
; Modified By: Soliman Elmalak
; Description: invoice summary component
; =============================================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceDialogComponent } from './invoice-dialog.component';

describe('InvoiceDialogComponent', () => {
  let component: InvoiceDialogComponent;
  let fixture: ComponentFixture<InvoiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
