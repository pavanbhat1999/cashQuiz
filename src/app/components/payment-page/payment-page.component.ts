import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainServiceService} from '../main-service.service'
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
selectColor=["grey","grey"];
  constructor(private mainservice : MainServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  contnue(){

  }
type(type){
 
  if(type==1)
  {
  this.mainservice.d_type="alipay";
  this.selectColor[0]="blue";
  }
 if(type==2)
 {
 this.mainservice.d_type="green-money";
 this.selectColor[1]="blue";
 this.router.navigate(["/greenMoneyDetail"])
  }
}
}
