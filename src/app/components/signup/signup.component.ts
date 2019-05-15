import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/services/user';
import { SignupService } from 'src/app/services/signup.service';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private status: boolean;
  private user: User;

  //
  //email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private signupService: SignupService, private alertMsg: AlertMessageService) { }

  ngOnInit() {
  }

  //This function send data to DB
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
        }).subscribe(message => {
          console.log(message);
          if (message['success'] == false) {
            
          }
        });
  }
}
