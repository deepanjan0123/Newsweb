import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  businessnews:any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((business)=>{
      console.log(business);
      this.businessnews = business.articles;
    })
  }

}
