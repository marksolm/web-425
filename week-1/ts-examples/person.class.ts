/**
 ============================================
 ;  Title:  person.class.ts
 ;  Author: Professor Krasso
 ;  Modified By: Soliman Elmalak
 ;  Date: 06 August 2021
 ;  Description: Person class that implements a Person interface
 ;============================================
 */
 import { IPerson } from "./person.interface";

 // Implement the IPerson interface
 class Person implements IPerson {
     firstName: string;
     lastName: string;
   
     // Constructor that that accepts the two arguments (firstName and lastName) and assign the values to the implemented IPerson fields 
     constructor(firstName: string, lastName: string) {
         this.firstName = firstName;
         this.lastName = lastName;
     }
 }
 
 //Create a new Person object passing-in my first and last name
 let myName = new Person("Soliman", "Elmalak");
 
 // Use the console.log() function to output the Person objects first and last name values
 console.log(`My name is ${myName.firstName} ${myName.lastName}`);