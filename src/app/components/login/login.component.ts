import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //This variable for show/hide password
  show = false;

  constructor() { }

  ngOnInit() {
  }

  onLogin(loginFroms: NgForm){
    console.log(loginFroms.value.username + " " + loginFroms.value.password);
    
    
  }

}
