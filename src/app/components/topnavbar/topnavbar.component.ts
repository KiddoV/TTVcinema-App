import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  username: string;

  constructor(private loginservice: LoginService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
  }
  
  
}
