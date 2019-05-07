import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAttribute } from '@angular/compiler/src/core';
import { createElement } from '@angular/core/src/view/element';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

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



}
