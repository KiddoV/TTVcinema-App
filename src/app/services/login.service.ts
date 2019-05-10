import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs'; //This module to control if user login or not @Viet

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  //This function to check username and password
  checkLogin(username: string, password: string) {
    if (username === "test" && password === "password") {
      //Store username for 1 session
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  //Check if user still login 
  isUserLogin() {
    let user = sessionStorage.getItem('username');
    console.log(user === null);
    return !(user === null);
  }

  //Remove user if they logout 
  userLogOut() {
    sessionStorage.removeItem('username');
  }

  //Restrict user from directly using url to login
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isUserLogin()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
