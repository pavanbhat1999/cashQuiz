import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {DepositeListService} from '../deposite-page/deposite-list.service';
import {MainServiceService} from '../main-service.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-deposite-page',
  templateUrl: './deposite-page.component.html',
  styleUrls: ['./deposite-page.component.css']
})
export class DepositePageComponent implements OnInit {
count_r : number = 1;
count_y : number = 2;
heart_price ;
deposite ;
amount = [];
totalAmount : number = 0;

detail = [];
detailDisplay;
continuePressed = true;
  constructor(private service : DepositeListService,public router : Router,private mainservice : MainServiceService) { }

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
    this.mainservice.getDeposite(this.deposite);
    let j= [0,1,2,3,4,5,6,7]
    for(let i of j)
    {
   
    console.log(i);
    this.amount[i]=this.deposite[i].d_amount;
    this.detail[i]=this.deposite[i].d_description;
    }
  }

detailfetch(id){
  this.count_r =1;
this.count_y =2;
this.detailDisplay = this.detail[id];
this.totalAmount = parseFloat(this.amount[id]);

this.heart_price = parseFloat(this.deposite[id].d_add_heart_amount);
this.mainservice.putDeposite(id);

// this.mainservice.putDeposite(this.totalAmount);

}

minus(h){
  if(h==1&&this.count_r>1)
  {
  this.count_r--;
  this.totalAmount -=this.heart_price;
  } 
  if(h==2&&this.count_y>2)
  {
  this.count_y--;
  this.totalAmount -=this.heart_price;
  }
}
add(h){
  if(h==1&&this.count_r<2)
  {
  this.count_r++;
  this.totalAmount +=this.heart_price;
  }
  if(h==2&&this.count_y<4)
  {
    this.count_y++;;
    this.totalAmount +=this.heart_price;
  }
  
}

continue(){
  if(this.continuePressed==false)
  {
    this.router.navigate(['paymentPage']);
    this.mainservice.redheart=this.count_r;
    this.mainservice.yellowheart=this.count_y;
    // this.mainservice.putDeposite(this.totalAmount);
    this.mainservice.totalAmount = this.totalAmount.toFixed(2);
  }
  else
  this.continuePressed = false;
  }
}
