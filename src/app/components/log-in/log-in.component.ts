import { Component, OnInit, Output, EventEmitter, Input, NgZone } from '@angular/core';
import {LoInService} from '../log-in/lo-in.service';

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
@Input() movie;

  constructor(private service : LoInService,ngZone : NgZone) { }

  ngOnInit(): void {
    
  }
@Output() register_val=new EventEmitter();
@Output() login = new EventEmitter();
onClick(){
  this.register_val.emit("true");
}
loginClicked(email,password){

console.log(email);

this.service.getfun(email,password)
.subscribe(response => 
{
if(response)
this.check();
if(!response)
this.uncheck();
});
//this.login.emit("true");
console.log(this.auth_success)

//alert("login unsucessfull");
}
check(){
  alert("Log in successful");
  this.login.emit("true");
}
uncheck(){
  alert("Log In Unsuccessful Register or click forgot password")
}
submitForm(){
  console.log("dd");
}
}
