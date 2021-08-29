/**
 ============================================
 ;  Title: composer-list.component.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 13 August 2021
 ;  Description: Displays a list of composers
 ;  ============================================
 */
 
 /* Import required module from Angular */
import { Component, OnInit } from '@angular/core';
/* Import the composer interface and the composer class */
import { IComposer } from '../composer.interface';

/* Add an import statement for the Composer service */
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
/* Export as ComposerListComponent, create an Array of composers */
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  
  /* Add the ComposerService to the components constructor */
  constructor(private composerService: ComposerService) {
    /* call from the Composer class with the composerService.getComposers() function */
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }
}
