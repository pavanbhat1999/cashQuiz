import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {registerService} from './register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service : registerService) { }

  ngOnInit(): void {
  }
  @Output() register_val = new EventEmitter();
onClicked(){
this.register_val.emit();
}
registerClicked(username,password,email,phone){
  console.log(username,password,email,phone);
  this.service.register(username,password,email,phone)
.subscribe(response => 
{
if(response)
this.registerSuccess();
if(!response)
this.uncheck();
});
//this.login.emit("true");



}
registerSuccess(){
  alert("Registration Successful");
  this.register_val.emit();
  
}
uncheck(){
  alert("Registtratin Unsuccessful Check whether you have used any repeted entities")
}
onCountryChange($event){
alert("change");
}
hasError(event){

}
getNumber(event){

}
telInputObject($event){

}
}

