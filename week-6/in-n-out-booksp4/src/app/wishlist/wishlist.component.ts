/*
============================================
; Title:  wishlist.component.ts
; Author: Professor Krasso
; Date:   12 September 2021
; Modified By: Soliman Elmalak
; Description: wishlist component (Wish list page
============================================
*/

import { Component, OnInit } from '@angular/core';

/* Import statement for the IWishlistItem interface  */
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
  /* Add a new variable named items of type Array  */
  items: Array<IWishlistItem> = [];

  constructor() {

   }

  ngOnInit(): void {
  }

  // Add an updateItemsHandler function.
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}