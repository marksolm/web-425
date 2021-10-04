/** 
=============================================================
; Title:  services.component.ts
; Author: Professor Krasso
; Date:   30 september 2021
; Modified By: Soliman Elmalak
; Description: services component 
; =============================================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

// Import required application resources
import { IService } from './services.interface';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
// Export ServicesComponent
export class ServicesComponent implements OnInit {
  // Variables
  services: Array<IService>;
  serviceForm: FormGroup;
  serviceArray: FormArray;
  selectedServices: Array<IService>;
  laborFee: number = 0.0;
  partsFee: number = 0.0;
  partsLaborFee: number = 0.0;
  invoiceTotal: number = 0.0;
  repairTotal: number = 0.0;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
   };


   ngOnInit(): void {
    let totalsPattern = "[+-]?([0-9]*[.])?[0-9]+";
    // Create a Reactive Form
    this.serviceForm = this.fb.group({
      serviceOptions: new FormArray([]),
      laborFee: new FormControl('', Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')),
      partsFee: new FormControl('', Validators.pattern(totalsPattern)),
      partsLaborFee: new FormControl(''),
      invoiceTotal: new FormControl('')
    });

  // Services Array
  this.services = [
    {serviceName: "Password Reset", price: 39.99},
    {serviceName: "Spyware Removal", price:99.99},
    {serviceName: "RAM Upgrade", price: 129.99},
    {serviceName: "Software Installation", price: 49.99},
    {serviceName: "Tune-up", price: 89.99},
    {serviceName: "Keyboard Cleaning", price: 45.00},
    {serviceName: "Disk Clean-up", price: 149.99}
  ];

  this.serviceArray = this.serviceForm.controls.serviceOptions as FormArray;
  // Add the checkboxes
  this.addCheckbox();
  }

  // Add the checkboxes to each service
  private addCheckbox(): void {
    this.services.forEach(() => this.serviceArray.push(new FormControl(false)));
  }
 // Adding the selected service to the total value
  onCheckboxChanged(e) {

    if (e.checked) {
      this.repairTotal = this.repairTotal + e.source.value;
    } else {
      this.repairTotal = this.repairTotal - e.source.value;
    }
  }

  // Build the array of selected Services
  onSubmit() {
    this.selectedServices = this.serviceForm.value.serviceOptions
    .map((checked, index) => checked ? this.services[index] : null)
    .filter(v => v !== null);


    const dialogRef = this.dialog.open(InvoiceDialogComponent,
      {data: {
       repairs: this.selectedServices,
       repairTotal: this.totalOfRepair(),
       partsFee: this.addPartsFee(),
       laborFee: this.addLaborFee(),
       partsLaborFee: this.partsAndLaborFee(),
       invoiceTotal: this.TheInvoiceTotal()
      },
    disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

// labor fee
 TheLaborFee(hourly) {
    if (!hourly) {
      this.laborFee = 0.0;
    } else {
      this.laborFee = hourly * 50;
    }
  }
 // parts fee
  ThePartsFee(hourly) {
    if (!hourly) {
      this.partsFee = 0.0;
    } else {
      this.partsFee = hourly;
    }
  }
// total of selected services
  totalOfRepair() {
    return this.repairTotal;
  }

  addPartsFee() {
    return this.partsFee;
  }
  ThePartsLaborFee(e) {
    if (e) {
     this.TheLaborFee(parseFloat(e.labor));
     this.ThePartsFee(parseFloat(e.parts));
     this.partsLaborFee = this.partsFee + this.laborFee;
    }
  }
   totalOfInvoice(){

    this.invoiceTotal = this.totalOfRepair() + this.partsAndLaborFee();
  }

  addLaborFee() {
    return this.laborFee;
  }

  partsAndLaborFee()
 {
   return this.partsLaborFee;
 }
 //Adding the parts and labor fee to the Total of the invoice.
  TheInvoiceTotal() {
    return this.repairTotal + this.partsLaborFee;
  }
}