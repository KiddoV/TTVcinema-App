import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  displayedColumns = ['userid', 'firstName', 'lastName', 'email', 'username'];
  constructor() { }

  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }
}

export interface UserList{
  userid: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

const ELEMENT_DATA: UserList[] = [
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'},
  {userid: 100, firstName: 'Exam', lastName: 'Ple', email: 'example@test.com', username: 'test123'}
];
