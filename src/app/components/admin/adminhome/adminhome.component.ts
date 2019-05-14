import { Component, OnInit, Inject } from '@angular/core';
import { FetchDatabaseService } from 'src/app/services/fetch-database.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { SearchMovieService } from 'src/app/services/search-movie.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  displayedColumns = ['userid', 'firstName', 'lastName', 'email', 'username', 'role'];
  displayedColumns02 = ['id', 'title', 'release_date', 'tasks'];
  totalUser: number;
  dataSource: Object;
  dataSource02: Object;


  constructor(private fetchDbService: FetchDatabaseService,
              private searchMovieService: SearchMovieService, 
              private loginservice: LoginService,
              private router: Router,
              //Inject dialog box
              public dialog: MatDialog) { }
  ngOnInit() {
    this.fetchDbService.getAllAccrounts().subscribe(datas => {
      // this.userList = datas;
      this.totalUser = Object.keys(datas).length;
      //console.log(this.totalUser);
    });

    this.searchMovieService.getUpcomingMovies().subscribe(upcomingMovies => {
       this.dataSource02 = upcomingMovies['results'];
    })
  }

  logout() {
    this.loginservice.userLogOut();
    this.router.navigate(['/login']);
  }

  getAllUsers() {
    this.fetchDbService.getAllAccrounts().subscribe(datas => {
      this.dataSource = datas;
    });
  }

  openMovieInfoBox(element: any) {
    this.dialog.open(MoreMovieInfoDialog, {
      data: element.id
    });
    //console.log(element.id); //got the id
  }
}

//This component for the popup <more movie info> dialogbox
@Component({
  selector: 'moreinfo-movie-dialog',
  templateUrl: 'dialogbox-moremovieinfo.html',
  styleUrls: ['./adminhome.component.css']
})
export class MoreMovieInfoDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogMovieData
  ){}
}
export interface DialogMovieData {
  data: any;
}