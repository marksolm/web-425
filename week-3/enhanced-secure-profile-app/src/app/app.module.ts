/**
 ============================================
 ;  Title: app.module.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 13 August 2021
 ;  Description: App module
 ;  ============================================
 */

/* Import required modules from Angular */
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';

 /* Import the components that will be navigated to */
 import { AppComponent } from './app.component';
 import { MyImageComponent } from './my-image/my-image.component';
 import { MyDetailsComponent } from './my-details/my-details.component';
 import { SignInComponent } from './sign-in/sign-in.component';
 import { HomeComponent } from './home/home.component';
 import { AppRoutes } from './app.routing';
 import { RouterModule } from '@angular/router';

/* Define the module components */
 @NgModule({
   declarations: [
     AppComponent,
     MyImageComponent,
     MyDetailsComponent,
     SignInComponent,
     HomeComponent
   ],
   imports: [
     BrowserModule,
     RouterModule.forRoot(AppRoutes)
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 /* Export AppModule */
 export class AppModule { }
 