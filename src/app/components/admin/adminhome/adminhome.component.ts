import { Component, OnInit } from '@angular/core';
import { FetchDatabaseService } from 'src/app/services/fetch-database.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

export interface UserList {
  userid: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: {
      roleName: string;
  }
}

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  displayedColumns = ['userid', 'firstName', 'lastName', 'email', 'username', 'role'];

  userList: any;
  dataSource: Object;

  constructor(private fetchDbService: FetchDatabaseService, 
              private loginservice: LoginService,
              private router: Router) { }
  ngOnInit() {
  }

  logout() {
    this.loginservice.userLogOut();
    this.router.navigate(['/login']);
  }

  getAllUsers() {
    this.fetchDbService.getAllAccrounts().subscribe(datas => {
      // this.userList = datas;
      this.userList = datas;
      console.log(this.userList);
      this.dataSource = datas;
    });
  }
}
