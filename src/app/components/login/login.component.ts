import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {LoginService} from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //This variable for show/hide password
  show = false;



  constructor(public loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }


  onLogin(loginForm: NgForm){
    console.log(loginForm.value.username + " " + loginForm.value.password);

    if (this.loginservice.checkLogin(loginForm.value.username, loginForm.value.password)) {
      this.router.navigate(['/user-home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
