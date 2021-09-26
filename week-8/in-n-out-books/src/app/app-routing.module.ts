/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Abdelmalak
; Description: Routing module for in-n-out-books, part 4
============================================
*/

/* Import required modules from Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import Application Modules and Components */
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

/* Define the routes to be routed to based on URL chosen */
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Export as AppRoutingModule.
export class AppRoutingModule { }