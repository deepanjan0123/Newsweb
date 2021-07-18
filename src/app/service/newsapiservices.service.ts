import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  [x: string]: any;

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f2091fb56284419fa226527567f3756d";

  //tech News Api
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f2091fb56284419fa226527567f3756d";

  // business News Api
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f2091fb56284419fa226527567f3756d";

  // entertainment News Api
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f2091fb56284419fa226527567f3756d";

  //topheading function
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  //tecnology function
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  // business function
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
  //entertainment function
  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl);
  }
}
