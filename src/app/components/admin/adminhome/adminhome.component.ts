import { Component, OnInit, Inject } from '@angular/core';
import { FetchDatabaseService } from 'src/app/services/fetch-database.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { SearchMovieService } from 'src/app/services/search-movie.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AlertMessageService } from 'src/app/services/alert-message.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  displayedColumns = ['userid', 'firstName', 'lastName', 'email', 'username', 'role'];
  displayedColumns02 = ['id', 'title', 'release_date', 'tasks'];
  displayedColumns03 = ['id', 'title', 'showtime', 'tasks'];
  totalUser: number;
  totalMovieInDb: number;
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

    this.fetchDbService.getAllMoviesInDB().subscribe(datas => {
      this.totalMovieInDb = Object.keys(datas).length;
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

      data: element.id //Get the id and send it to moreinfodialog component
    });
    // console.log(element.id); //got the id
  }
}

//This component for the popup <more movie info> dialogbox
@Component({
  selector: 'moreinfo-movie-dialog',
  templateUrl: './dialogbox-movieinfo.html',
  styleUrls: ['./adminhome.component.css']
})
export class MoreMovieInfoDialog {
  title: string;
  id: any;
  poster: string;
  runtime: any;
  status: string;
  vote_average: any;
  time: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private searchMovieService: SearchMovieService,
    private fetchData: FetchDatabaseService,
    private alertMsg: AlertMessageService) { }

  ngOnInit() {

    this.searchMovieService.getMovieById(this.data).subscribe(
      movie => {
        console.log(movie);
        this.id = movie["id"];
        this.poster = movie["poster_path"];
        this.title = movie['title'];
        this.runtime = movie['runtime'];
        this.status = movie['status'];
        this.vote_average = movie['vote_average'];
      })
  }

  sendMovieToDb() {
    let data = {
        movieApiId: this.id
    }
    // console.log(this.movieTimeValue)
    this.fetchData.addMovie(data).subscribe(resMsg => {
      console.log(resMsg['success']);
      if (resMsg['success']) {
        this.alertMsg.openSnackBarSuccess('Added movie successfuly!', 'NICE!');
      } else {
        this.alertMsg.openSnackBarError('Something went wrong!', 'Please try again!');
      }
    });
  }
}