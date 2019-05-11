import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDatabaseService {
  private mainUri = 'http://13.58.182.105:8085/cinema';

  constructor(private http: HttpClient) { }
  
  getAllAccrounts() {
    return this.http.get(this.mainUri + "/account/all");
  }
}
