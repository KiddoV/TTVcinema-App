import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  mainUri: string = "http://13.58.182.105:8085//cinema/account"

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post(this.mainUri, user);

    console.log(user);
  }
}
