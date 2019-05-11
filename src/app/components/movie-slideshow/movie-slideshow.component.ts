import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-slideshow',
  templateUrl: './movie-slideshow.component.html',
  styleUrls: ['./movie-slideshow.component.css']
})
export class MovieSlideshowComponent implements OnInit {



  ngOnInit() { }
  imagesUrl = [
    'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
    'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
  ];

  imageObject: Array<object> = [{
    image: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    thumbImage: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
  }, {
    image: 'assets/img/slider/2.jpg',
    thumbImage: 'assets/img/slider/2_min.jpeg',
    title: 'Image with title' //Optional: You can use this key if you want to show title
  }
  ];

}
