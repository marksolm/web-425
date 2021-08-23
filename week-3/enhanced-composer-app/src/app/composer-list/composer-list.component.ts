/**
 ============================================
 ;  Title: composer-list.component.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 13 August 2021
 ;  Description: displays a list of composers/ Assignment 2.4 - Routing in Action
 ;  ============================================
 */

 /* Import required module from Angular */
import { Component, OnInit } from '@angular/core';
/* Import the composer interface and the composer class */
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
/* Export as ComposerListComponent, create an Array of composers */
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }
}
