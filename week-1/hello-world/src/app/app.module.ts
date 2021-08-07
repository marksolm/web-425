/**
 ============================================
 ;  Title: app.module.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 06 August 2021
 ;  Description: App module
 ;  ============================================
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
