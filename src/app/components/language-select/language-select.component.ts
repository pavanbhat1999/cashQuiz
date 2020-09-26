import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainServiceService} from '../main-service.service'
@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.css']
})
export class LanguageSelectComponent implements OnInit {
  cat_details;
  cat1;
  cat2
  cat3;
  detail={
    "cat_id": "3",
    "cat_name": "Chinese Simplified",
    "cat_status": "active",
    "cat_created_date": "2020-03-14 15:26:43"
}
  constructor(private mainservice: MainServiceService,private router:Router) { }

  ngOnInit(): void {
    this.mainservice.getCategoryData()
    .subscribe(response=>
      {
      console.log(response);
      this.cat_details=response;
      this.cat1=this.cat_details[0].cat_name;
      this.cat2=this.cat_details[1].cat_name;
      this.cat3=this.cat_details[2].cat_name;
      }
      )
  }
englishSelect(){
  this.mainservice.cat_id="1";
  this.mainservice.cat_name=this.cat3;
  this.router.navigate(["/questions"]);
}
chineeseSelect(){
  this.mainservice.cat_id="2";
  this.mainservice.cat_name=this.cat2;
  this.router.navigate(["/questions"]);
}
simplifiedchineeseSelect(){
this.mainservice.cat_id="3";
this.mainservice.cat_name=this.cat1;
this.router.navigate(["/questions"]);
}
}
