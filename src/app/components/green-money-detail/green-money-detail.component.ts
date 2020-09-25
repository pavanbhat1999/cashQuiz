import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import {MainServiceService} from '../main-service.service'
@Component({
  selector: 'app-green-money-detail',
  templateUrl: './green-money-detail.component.html',
  styleUrls: ['./green-money-detail.component.css']
})
export class GreenMoneyDetailComponent implements OnInit {
  user_id;
  deposite_id;
  amount;
  type;
  status = "success";
  description = "check accepted"
  result = 1;
  check_no = 12345;
  check_id = 1;

  constructor(private mainservice : MainServiceService) { }

  ngOnInit(): void {
    this.deposite_id = this.mainservice.d_number+1;  // id0 is incresed by 1 to give correct answer
   this.user_id=this.mainservice.u_id;
   this.deposite_id=this.deposite_id;
    
   this.amount=this.mainservice.totalAmount;
   this.type=this.mainservice.d_type;
    // d-num+1=id
    
  }
payment(){
 this.mainservice.payment_submit(this.user_id,this.deposite_id,this.amount,this.type,status,this.description,this.result,this.check_no,this.check_id)
 .subscribe(response=>console.log(response));
}
}
