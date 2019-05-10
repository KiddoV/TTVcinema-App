import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/services/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private status: boolean;
  private user: User;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  onSignup(signupForm: NgForm) {

    //console.log(signupForm.value.firstname);
    console.log(signupForm.value);
    this.signupService.addUser({
      id: 0,
      username: signupForm.value.username,
      password: signupForm.value.password,
      lastName: signupForm.value.lastname,
      firstName: signupForm.value.firstname,
      email: signupForm.value.email
    }).subscribe(data => {
      console.log(data);
    });
  }
}
