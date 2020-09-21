import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {DepositeListService} from '../deposite-page/deposite-list.service';
@Component({
  selector: 'app-deposite-page',
  templateUrl: './deposite-page.component.html',
  styleUrls: ['./deposite-page.component.css']
})
export class DepositePageComponent implements OnInit {
count_r : number = 1;
count_y : number = 2;
deposite ;
amount = [];
detail = [];
detailDisplay;
continuePressed = true;
  constructor(private service : DepositeListService) { }

  ngOnInit(): void {
    this.service.getfun()
    .subscribe(response => 
    {
    console.log(response);
    this.callfun(response);
    });
  }
callfun(response)
 {
    this.deposite = response;
    let j= [0,1,2,3,4,5,6,7]
    for(let i of j)
    {
   
    console.log(i);
    this.amount[i]=this.deposite[i].d_amount;
    this.detail[i]=this.deposite[i].d_description;
    }
  }

detailfetch(id){
this.detailDisplay = this.detail[id];
}

minus(h){
  if(h==1&&this.count_r>1)
  this.count_r--;
  if(h==2&&this.count_y>2)
  this.count_y--;
}
add(h){
  if(h==1)
  this.count_r++;
  if(h==2)
  this.count_y++;
}
continue(){
  if(this.continuePressed==false)
  {

  }
  else
  this.continuePressed = false;
  }
}
