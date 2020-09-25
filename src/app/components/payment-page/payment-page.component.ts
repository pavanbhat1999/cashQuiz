import { Component, OnInit } from '@angular/core';
import {MainServiceService} from '../main-service.service'
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private mainservice : MainServiceService) { }

  ngOnInit(): void {
  }
  contnue(){

  }
type(type){
  if(type==1)
  this.mainservice.d_type="alipay"
  if(type==2)
 this.mainservice.d_type="green-money"
}
}
