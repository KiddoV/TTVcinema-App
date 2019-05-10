import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs'; //This module to control if user login or not @Viet
import { User, UserNameAndPass } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private mainUri: string = "http://13.58.182.105:8085//cinema/account/login";

  constructor(private http: HttpClient, private router: Router) { }

  //This function to check username and password
  checkLogin(userNameAndPass: UserNameAndPass) {
    return this.http.post(this.mainUri, userNameAndPass);
  }

  //Check if user still login 
  isUserLogin() {
    let user = sessionStorage.getItem('username');
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
