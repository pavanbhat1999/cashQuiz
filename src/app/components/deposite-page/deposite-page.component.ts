import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {DepositeListService} from '../deposite-page/deposite-list.service';
@Component({
  selector: 'app-deposite-page',
  templateUrl: './deposite-page.component.html',
  styleUrls: ['./deposite-page.component.css']
})
export class DepositePageComponent implements OnInit {
count_r : number =1;
count_y : number = 2;
deposite ;
amount = [];
detail = [];
  constructor(private service : DepositeListService) { }

  ngOnInit(): void {
    this.service.getfun()
    .subscribe(response => 
    {
    console.log(response);
    this.callfun(response);
    });
  }
callfun(response) {
this.deposite = response;
this.amount[0]=this.deposite[0].d_amount;
this.detail[0]=this.deposite[0].d_description;
}
}
