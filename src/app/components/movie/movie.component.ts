import { Component, OnInit } from '@angular/core';

//to use Route parameter @Viet
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import { SearchMovieService } from 'src/app/services/search-movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any; //to hold a movie object @Viet

  constructor(private router: ActivatedRoute, private searchMovieService: SearchMovieService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.searchMovieService.getMovieById(id).subscribe(data => {
        this.movie = data;
        console.log(this.movie.poster_path)
        console.log(this.movie);
      });
    });

  }

}
