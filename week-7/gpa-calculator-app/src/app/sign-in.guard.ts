/*
============================================
; Title:  sign-in.guard.ts
; Author: Professor Krasso
; Date:   18 September 2021
; Modified By: Soliman Elmalak
; Description: sign-in.guard Component
============================================
*/

// import statement
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = this.cookieService.get('session_user');
   //if statement to check the value, if true, return true.  If false, use the router to redirect users back to the sign-in page 
    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}