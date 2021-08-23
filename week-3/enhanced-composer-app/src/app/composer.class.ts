/*
============================================
; Title:  composer-class.ts
; Author: Professor Krasso
; Date:   20 August 2021
; Modified By: Soliman Elmalak
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
============================================
*/
import { IComposer } from './composer.interface';

/* Create and export a new TypeScript class called Composer */
export  class Composer {
    composers: Array<IComposer>;

    /* Define the constructor with Component requirements */
    constructor () {
        this.composers = [
            {composerId: 100, fullName: "Franz Haydn", genre: "Classical"},
            {composerId: 101, fullName: "Pyotr Tchaikovsky", genre: "Classical"},
            {composerId: 102, fullName: "Johannes Brahms", genre: "Classical"},
            {composerId: 103, fullName: "Wolfgang Mozart", genre: "Classical"},
            {composerId: 104, fullName: "Ludwig Beethoven", genre: "Classical"}
          ]
    }
      /* Return the composer */
  getComposers() {
    return this.composers;
  }

  /* Find the composer by composerId and return it */
  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}