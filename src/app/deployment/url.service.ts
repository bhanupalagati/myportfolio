import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  Base = 'https://ml-rest-api.herokuapp.com/'
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.Base + `covidcases`)
  }

}
