import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAttribute } from '@angular/compiler/src/core';
import { createElement } from '@angular/core/src/view/element';

<<<<<<< HEAD
=======
//Import the service to use @Viet
import { SearchMovieService } from 'src/app/services/search-movie.service';

>>>>>>> 3cf430c9e8d3e2d581b0fbfd1902a2ef0a60047b
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

<<<<<<< HEAD
  movieTitle="";
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  fetchData() { 
    this.http.get("https://api.themoviedb.org/3/search/movie?api_key=e889b3766f72d291bb10bbfed659982c&language=en-US&query="
     + this.movieTitle
     + "&page=1&include_adult=false").subscribe(
      data=> {
        console.log(data);
        let movies = data["results"];
        
        for(let index in movies) {
          let row = document.getElementById("movieTable");
          let tr = document.createElement("tr");
          tr.insertCell(0).innerText = movies[index]["title"];
          tr.insertCell(1).innerText = movies[index]["overview"];
          row.appendChild(tr);
        }
      },
      error=>{
        console.log(error);
      }
     );
  }



=======
  // movieTitle="";
 
  movieNameInput: String;
  searchResult: any;  //This value to hold the search result @Viet

  // constructor(private http: HttpClient) { }
  constructor(public searchMovieService: SearchMovieService) {}

  ngOnInit() {}

  // fetchData() { 
  //   this.http.get("https://api.themoviedb.org/3/search/movie?api_key=e889b3766f72d291bb10bbfed659982c&language=en-US&query="
  //    + this.movieTitle
  //    + "&page=1&include_adult=false").subscribe(
  //     data=> {
  //       console.log(data);
  //       let movies = data["results"];
        
  //       for(let index in movies) {
  //         let row = document.getElementById("movieTable");
  //         let tr = document.createElement("tr");
  //         tr.insertCell(0).innerText = movies[index]["title"];
  //         tr.insertCell(1).innerText = movies[index]["overview"];
  //         row.appendChild(tr);
  //       }
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //    );
  // }

  getMovies() {
    this.searchMovieService.searchMovie(this.movieNameInput).subscribe(data => {
      this.searchResult = data['results'];

      console.log(this.searchResult);
    });
  }

>>>>>>> 3cf430c9e8d3e2d581b0fbfd1902a2ef0a60047b
}
