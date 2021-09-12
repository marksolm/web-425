/*
============================================
; Title:  wishlist-create.component.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: wishlist-create component (Wish list page
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/* Import statement for the IWishlistItem */
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
 
  /* Add a variable named item of type IWishlistItem */
  item: IWishlistItem;
  /*Add Output and EventEmitter */
   @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  constructor() {
    /*create a new instance of the IWishlistItem object */
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }
    /*Add an addItem function.*/ 
    addItem() {
      console.log('Inside wishlist-create.component.ts (child) - addItem() function');
      this.addItemEmitter.emit({
        title: this.item.title,
        authors: this.item.authors
      })

      this.item = {} as IWishlistItem;
    }
}