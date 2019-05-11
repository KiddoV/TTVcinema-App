import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAttribute } from '@angular/compiler/src/core';
import { createElement } from '@angular/core/src/view/element';

//Import the service to use @Viet
import { SearchMovieService } from 'src/app/services/search-movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

 
  movieNameInput: String;
  searchResult: any;  //This value to hold the search result @Viet

  constructor(public searchMovieService: SearchMovieService) {}

  ngOnInit() {}

  getMovies() {
    this.searchMovieService.searchMovie(this.movieNameInput).subscribe(data => {
      this.searchResult = data['results'];

      //console.log(this.searchResult);
    });
  }

}
