import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FetchDatabaseService } from 'src/app/services/fetch-database.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  userInfo: any;

  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  }

  logout() {
    this.loginservice.userLogOut();
    this.router.navigate(['/login']);
  }
}

////////////////////////////////////////////////
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo: any;
  constructor(private fetchDB: FetchDatabaseService) {}
  ngOnInit(){
    var info = JSON.parse(sessionStorage.getItem('userInfo'));
    this.userInfo = info;

    console.log(this.userInfo);
  }

}

////////////////////////////////////////////////
@Component({
  selector: 'app-userticket',
  templateUrl: './userticket.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserTicketComponent implements OnInit {
  ticketDb: any;

  constructor(private fetchDB: FetchDatabaseService) {}
  ngOnInit(){
    var info = JSON.parse(sessionStorage.getItem('userInfo'));
    this.fetchDB.getTicketsById(info['id']).subscribe(tickets => {
      this.ticketDb = tickets;
      console.log(tickets);
    });
  }

}