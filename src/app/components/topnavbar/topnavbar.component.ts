import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor(private loginservice: LoginService,
              private router: Router) {
    
   }

  ngOnInit() {
  }
  
  
    logout() {
      this.loginservice.userLogOut();
      this.router.navigate(['/login']);
  }
}
