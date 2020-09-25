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
    console.log("deposite="+id);
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
}










