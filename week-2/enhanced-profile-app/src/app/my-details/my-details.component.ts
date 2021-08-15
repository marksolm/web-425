/**
 ============================================
 ;  Title: my-details.component.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 13 August 2021
 ;  Description: my-details component
 ;  ============================================
 */
import { Component, OnInit } from '@angular/core';
 /* Create a TypeScript class and name it Person */
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]
 /* constructor(fullName: string, favoriteFood: string, favoriteColor: string)  */
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
     /* Assign the passed-in parameters to the class fields */
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  /* Define a new variable called myProfile and give it a data type of Person */
  myProfile: Person;
 
  /* create a new instance of the Person class and pass-in your actual full name, favorite color, and favorite food */
  constructor() { 
    this.myProfile = new Person("Soliman Abdelmalak", "Pizza", "Blue");
  }

  ngOnInit(): void {
  }

}
