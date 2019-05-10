import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginservice.userLogOut();
    this.router.navigate(['/login']);
  }
}
