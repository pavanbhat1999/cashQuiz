import { Component, OnInit } from '@angular/core';
import {MainServiceService} from '../main-service.service'
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(service : MainServiceService) { }

  ngOnInit(): void {
  }
  contnue(){

  }

}
