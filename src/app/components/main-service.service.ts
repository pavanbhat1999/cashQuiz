import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { from, Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import {Deposites} from '../components/deposite-page/deposite';

import {Users} from './log-in/user'

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  d_number : number = 0;
  redheart : number = 0;
  yellowheart : number = 0;
  totalAmount ;
  d_type ;
  deposite;
  user_details;
  u_id;
  u_username;
  u_email;
  email;
  password;
  constructor(private http: HttpClient) { }
getUserDetails()
{
  var data = new FormData();
  data.append("email", this.email);
 
  data.append("password", this.password);

  
  return this.http.post<Users>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API//user/login',data).pipe(map(response=> response.data))
}
  putDeposite(id){
    console.log("deposite_id="+id);
    this.d_number = id;
  }
  getDeposite(deposite){
    this.deposite = deposite;
  }
  getlogin(email,password)
  {
    this.email=email;
    this.password=password;
    var data = new FormData();
  data.append("email", email);
 
  data.append("password", password);
  
    return this.http.post<Users>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API//user/login',data).pipe(map(response=> response))  
  }
  getfun()
  {
    var data = new FormData();
    
  
    return this.http.post<Deposites>('https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/deposite/deposite_list',data).pipe(map(response => response.data))  
  }
  getfun_deposite()
  {
    var data = new FormData();
    return this.http.post<Deposites>('https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/deposite/deposite_list',data).pipe(map(response => response.data))  

  }
  payment_submit(user_id,deposite_id,amount,type,status,description,result,check_no,check_id)
  {
    var formdata = new FormData();
  //   data.append("user_id",user_id );
 
  // data.append("deposite_id", deposite_id);
  // data.append("amount", amount);
  // data.append("type", type);
  
  // data.append("status", status);
  // data.append("description", description);
  // data.append("result", result);
  // data.append("check_no", check_no);
  // data.append("checkid", check_id);
  // data.append("user_id","6" );
 
  // data.append("deposite_id", "1");
  // data.append("amount", "1.99");
  // data.append("type", "green-money");
  
  // data.append("status", "success");
  // data.append("description", "check accepted");
  // data.append("result", "1");
  // data.append("check_no", "12345");
  // data.append("checkid", "1");
formdata.append("user_id", user_id);
formdata.append("deposite_id",deposite_id);
formdata.append("amount", amount);
formdata.append("type", type);
formdata.append("status", status);
formdata.append("description", description);
formdata.append("result", result);
formdata.append("check_no", check_no);
formdata.append("check_id",check_id);
  return this.http.post('https://cors-anywhere.herokuapp.com/http://moneyglobeapp.com/cash_quiz/API/payment/payment_submit',formdata).pipe(map(response => response))
  }
}










