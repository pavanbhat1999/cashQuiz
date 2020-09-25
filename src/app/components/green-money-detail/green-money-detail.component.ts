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

  constructor(private service : MainServiceService) { }

  ngOnInit(): void {
    this.deposite_id = this.service.d_number+1;  // id0 is incresed by 1 to give correct answer
    console.log("d_id="+this.deposite_id);
    console.log("amount="+this.service.deposite[this.service.d_number].d_amount);
    console.log("type="+this.service.d_type);
    // d-num+1=id
  }
payment(){

}
}
