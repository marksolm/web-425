/**
 ============================================
 ;  Title: composer-list.component.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 13 August 2021
 ;  Description: composer-list.component/ Assignment 2.4 - Routing in Action
 ;  ============================================
 */

 /* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

/* Create and export a new TypeScript class called Composer */
export default class Composer {
  fullName: string;
  genre: string;

  /* Define the constructor with Component requirements */
  constructor (fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
/* Export as ComposerListComponent, create an Array of composers */
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;
  constructor() {
    this.composers = [
      new Composer("Franz Haydn", "Classical"),
      new Composer("Pyotr Tchaikovsky", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Wolfgang Mozart", "Classical"),
      new Composer("Ludwig Beethoven", "Classical")
    ]
   }

  ngOnInit(): void {
  }
}
