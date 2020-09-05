import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Users} from './user'
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class registerService {
  form: FormGroup;
  constructor( 
    private http: HttpClient) {
     
     }
  register(username:string,password:string,email:string,phone:string)
  {
    var data = new FormData();
    data.append("u_username",username);
    data.append("u_password", password);
    data.append("u_email", email);
    data.append("u_phone",phone);
    // data.append("u_username","root1");
    // data.append("u_password", "1234");
    // data.append("u_email", "a@h.com");
    // data.append("u_phone","767455");
  
    return this.http.post<Users>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API//user/registration',data).pipe(map(response=> response.status))  
  }
}
