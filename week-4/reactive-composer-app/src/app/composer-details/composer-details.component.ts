/*
============================================
; Title:  composer-details.components.ts
; Author: Professor Krasso
; Date:   22 August 2021
; Modified By: Soliman Abdelmalak
; Description: Composer-detail component (Composer details page)
============================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Import the composer interface and the composer class */
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
   /* Define the variables */
   composerId: number;
   composer: IComposer;
   
   /* Add the ComposerService to the components constructor*/
   constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    /* Call the snapshot function to retrieve the composerId parameter value and assign it to the composerId variable */
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    /* If the composerId matches the Array composerId, move the composer info in. */
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
