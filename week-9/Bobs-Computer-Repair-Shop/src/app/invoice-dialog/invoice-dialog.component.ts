/** 
=============================================================
; Title:  invoice-dialog.component.ts
; Author: Professor Krasso
; Date:   30 september 2021
; Modified By: Soliman Elmalak
; Description: invoice summary component
; =============================================================
*/

/* Import required modules from Angular */
import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
/* Import IService */
import { IService } from '../services/services.interface';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
/* Import InvoiceDialogComponent */
export class InvoiceDialogComponent implements OnInit {
  repairs: Array<IService>;
  invoiceForm: FormGroup;
  currentDate: number = Date.now();
  serviceName;
  price;
  repairTotal;
  partsFee;
  laborFee;
  partsLaborFee;
  invoiceTotal;

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data){
      this.repairs = data.repairs;
      this.repairTotal = data.repairTotal;
      this.partsFee = data.partsFee;
      this.laborFee = data.laborFee;
      this.partsLaborFee = data.partsLaborFee;
      this.invoiceTotal = data.invoiceTotal;

    console.log("repairs:", this.repairs);
    }
  ngOnInit(): void {
  }
}
