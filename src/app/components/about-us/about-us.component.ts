import { Component, OnInit } from '@angular/core';
import {MainServiceService} from '../main-service.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../inner/inner.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUs;
  aboutDisplay;
  constructor(private mainservice : MainServiceService) { }

  ngOnInit(): void {

    this.mainservice.about_us()
    .subscribe(response=>
      {
        console.log(response);
        this.aboutUs=response;
        this.aboutDisplay=this.aboutUs.s_value;
      }
      
      )
  }

}
