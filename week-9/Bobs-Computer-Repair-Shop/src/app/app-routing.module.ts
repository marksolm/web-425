/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   30 september 2021
; Modified By: Soliman Abdelmalak
; Description: App. routing
============================================
*/

/* Import required modules from Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import the components that will be navigated to */
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

/* Define the routes to be routed to based on URL chosen */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

/* Import Angular's routing module for the root of the application, and export as the router module of this application */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }