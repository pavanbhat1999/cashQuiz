import { Component, OnInit, Output, EventEmitter, Input, NgZone, ElementRef } from '@angular/core';
import {LoInService} from '../log-in/lo-in.service';
import {MainServiceService} from '../main-service.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email : string;
  password : string;
  users ;
  auth_success ;
  userDetail;

  
@Input() movie;

  constructor(private service : LoInService,ngZone : NgZone,public router : Router,private elementRef: ElementRef,private mainservice:MainServiceService) { }

  ngOnInit(): void {
    
    
  }
@Output() register_val=new EventEmitter();
@Output() login = new EventEmitter();
onClick(){
  
  this.register_val.emit("true");
}
loginClicked(email,password){

console.log(email);

this.mainservice.getlogin(email,password)
.subscribe(response => 
{
  this.userDetail=response;
  console.log(response.data);

if(response.status)
this.check();
if(!response.status)
this.uncheck();
});
//this.login.emit("true");
console.log(this.auth_success)


}
check(){
 // alert("Log in successful");
 //this.login.emit("true");
 this.mainservice.getUserDetails().subscribe(response=>
  {
  
  console.log(response);
  this.userDetail = response;
    this.mainservice.u_id=this.userDetail.u_id;
    this.mainservice.u_username=this.userDetail.u_username;
    this.mainservice.u_email=this.userDetail.u_email;
    console.log(this.mainservice.u_username);
  }
  );
  this.router.navigate(['startPage']); 

  //***IMPORTANT */ call this if you want to get this.userDetail
 
}
uncheck(){
  alert("Log In Unsuccessful Register or click forgot password")
}

}
