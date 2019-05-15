import { Component, OnInit } from '@angular/core';

//to use Route parameter @Viet
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import { SearchMovieService } from 'src/app/services/search-movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchDatabaseService } from 'src/app/services/fetch-database.service';

export interface MovieTimes {
  value: string;
  viewValue: string
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  options: FormGroup;
  showTime: string;
  showDiv = false;
  cardNumber: number;
  ticketType: string;
  movieId: number;
  movieInTheater :boolean ;
  buttonName = "BUY TICKET NOW";
  movie: any; //to hold a movie object @Viet

  constructor(private router: ActivatedRoute, 
              private searchMovieService: SearchMovieService,
              private fetchDB: FetchDatabaseService
              ) {}

  movieTimes: MovieTimes[] = [
    { value: '3:00PM', viewValue: 'at 03:00 PM TODAY' },
    { value: '6:00PM', viewValue: 'at 06:00 PM TODAY' },
    { value: '9:00PM', viewValue: 'at 09:00 PM TODAY' }
  ]

  ngOnInit() {

    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.movieId = params['movieID'];
      this.searchMovieService.getMovieById(id).subscribe(data => {
        this.movie = data;
        console.log(this.movieId);
        //console.log(this.movie.poster_path)
        //console.log(this.movie);
      });
    });

    this.fetchDB.isMovieInTheater(this.movieId).subscribe(res => {
      console.log(res);
      if(res['success']) {
        this.movieInTheater = true;
        console.log("True here!");
      } else {
        this.movieInTheater = false;
        console.log("False here!");
      }
    });    
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;

    if(this.showDiv) {
      this.buttonName = "NEVER MIND! :P";
    } else {
      this.buttonName = "BUY TICKET NOW";
    }
  }

  buyTicket() {
    var info = JSON.parse(sessionStorage.getItem('userInfo'));
    var userId = info["id"];
    console.log(this.showTime);
    console.log(userId);

    let data = {
      id: 0,
      account: {
        id: userId
      },
      movie: {
        movieApiId: this.movieId
      },
      movieShowTime: this.showTime,
      paymentCardNumber: this.cardNumber,
      ticketType: {
        type: this.ticketType
      }
    }

    console.log(data);

    this.fetchDB.addTicket(data).subscribe(resMsg => {
      console.log(resMsg);
    });
  }
}
