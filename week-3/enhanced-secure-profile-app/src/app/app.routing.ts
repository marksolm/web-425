/*
============================================
; Title:  app-routing.ts
; Author: Professor Krasso
; Date:   21 August 2021
; Modified By: Soliman Abdelmalak
; Description: Routing file for ENHANCED-secure-profile-app
============================================
*/

/* Import required modules from Angular */
import { Routes } from '@angular/router';

/* Import the SignInComponent and HomeComponent from secure-profile-app */
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

/* Export the routes for the sign-in and home components */
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    
    /* add an entry array for “canActivate” */
     canActivate: [SignInGuard]

  }
]