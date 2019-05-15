import { Component, OnInit } from '@angular/core';
import { SearchMovieService } from 'src/app/services/search-movie.service';
import { FetchDatabaseService } from 'src/app/services/fetch-database.service';

@Component({
  selector: 'app-movie-slideshow',
  templateUrl: './movie-slideshow.component.html',
  styleUrls: ['./movie-slideshow.component.css']
})
export class MovieSlideshowComponent implements OnInit {
  public imgs: any;
  public mIdDb: any;  //Movie id from database

  public dbImgs = new Array(); //

  constructor(private searchMovieService: SearchMovieService,
              private fetchDB: FetchDatabaseService) {}

  ngOnInit() { 
    this.fetchDB.getAllMoviesInDB().subscribe(datas => {
      for (var i = 0; i < Object.keys(datas).length; i++) {
        this.mIdDb = datas;
        //console.log(this.mIdDb[i]['movieApiId']);
        this.searchMovieService.getMovieById(this.mIdDb[i]['movieApiId']).subscribe(datas => {
          this.dbImgs.push({id: datas['id'], poster: datas['poster_path']});
          //console.log(typeof this.dbImgs);
        });
      }
    });

    this.searchMovieService.getUpcomingMovies().subscribe(datas => {
      for (var i = 0; i < 5; i++) {
        this.imgs = datas['results'];
      }
    })
  }
}
