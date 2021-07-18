import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllJSDocTags } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  // serviceData(){
  //   return {
  //     name:"rahul",
  //     age:22,
  //     id:100
  //   }
    getdata()
    {
      let url = "https://jsonplaceholder.typicode.com/todos/";
      return this.http.get(url);
    }
  }


