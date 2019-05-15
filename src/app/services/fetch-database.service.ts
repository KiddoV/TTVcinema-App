import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class FetchDatabaseService {
  private mainUri = 'http://13.58.182.105:8085/cinema';

  constructor(private http: HttpClient) { }
  
  getAllAccrounts() {
    return this.http.get(this.mainUri + "/account/all");
  }

  getAllMoviesInDB() {
    return this.http.get(this.mainUri + "/movie/all");
  }

  addMovie(data: any) {
    console.log(data);
    return this.http.post(this.mainUri + '/movie', data);
  }

  addTicket(data: any) {
    return this.http.post(this.mainUri + '/ticket', data);
  }

  isMovieInTheater(mId: any) {
    this.http.get(this.mainUri + '/movie/' + mId).subscribe(res => {
      console.log(res);
      if(res == null) {
        return false;
      } else {
        return true;
      }
    })
  }
}
