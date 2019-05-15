import { Component, OnInit } from '@angular/core';
import { SearchMovieService } from 'src/app/services/search-movie.service';

@Component({
  selector: 'app-movie-slideshow',
  templateUrl: './movie-slideshow.component.html',
  styleUrls: ['./movie-slideshow.component.css']
})
export class MovieSlideshowComponent implements OnInit {
  public imgs: any;

  constructor(private searchMovieService: SearchMovieService) {}

  ngOnInit() { 
    this.searchMovieService.getUpcomingMovies().subscribe(datas => {
      for (var i = 0; i < 5; i++) {
        this.imgs = datas['results'];
      }
    })
  }
}
