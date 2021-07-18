
import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _tech:NewsapiservicesService) { }

  technews:any = [];
  ngOnInit(): void {
    this._tech.techNews().subscribe((result)=>{
      console.log(result);
      this.technews = result.articles;
    })

  }

}
