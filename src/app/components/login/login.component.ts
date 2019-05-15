import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {LoginService} from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //This variable for show/hide password
  show = false;

  constructor(public loginservice: LoginService, 
              private router: Router,
              private alertMsgService: AlertMessageService) { }

  ngOnInit() {
  }


  onLogin(loginForm: NgForm){
    console.log(loginForm.value.username + " " + loginForm.value.password);
    
    this.loginservice.checkLogin({username: loginForm.value.username, password: loginForm.value.password}).subscribe(
      returnVal => {
        console.log(returnVal);
        
      // console.log('Value return: ' + returnVal['success']);
      if (returnVal['username'] == loginForm.value.username && returnVal['role']['roleName'] == 'user') {
        sessionStorage.setItem('userInfo', JSON.stringify(returnVal));
        sessionStorage.setItem('username', loginForm.value.username);
        this.alertMsgService.openSnackBarSuccess('Login Successfully', 'Welcome ' + returnVal['firstName'] + '!');
        this.router.navigate(['/user-home']);
      } else if (returnVal['username'] == loginForm.value.username && returnVal['role']['roleName'] == 'admin') {
        sessionStorage.setItem('userInfo', JSON.stringify(returnVal));
        sessionStorage.setItem('username', loginForm.value.username);
        this.alertMsgService.openSnackBarSuccess('Login Successfully', 'Welcome ADMIN!');
        this.router.navigate(['/admin-home']);
      } else {
        this.alertMsgService.openSnackBarError('Wrong Username or Password', 'Try again!');
        this.router.navigate(['/login']);
      }
    });
  }

}
