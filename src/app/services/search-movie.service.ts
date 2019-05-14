import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Needed to connect to the client @Viet
import { apiKey } from 'src/apiKey';
@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  private mainUrl = 'https://api.themoviedb.org/3/'; //The main url for API connecting @Viet
  private inputString: String ; //This value hold user input String @Viet


  constructor(public http: HttpClient) { }

  //This function take user input string and search for movies on API @Viet
  searchMovie(movieName: String) {
    this.inputString = movieName;

    return this.http.get(this.mainUrl + 'search/movie?api_key=' + apiKey + '&language=en-US&query=' + this.inputString
      + '&page=1&include_adult=false');
  }

  //Get individual movie by its ID
  getMovieById(id: number) {
    return this.http.get(this.mainUrl + 'movie/' + id + '?api_key=' + apiKey);
  }

  //Get upcoming movie
  getUpcomingMovies() {
    return this.http.get(this.mainUrl + 'movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1');
  }
}
