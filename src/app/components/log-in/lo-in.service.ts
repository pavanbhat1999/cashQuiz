import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Users} from './user'
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoInService {
  form: FormGroup;
  constructor( 
    private http: HttpClient) {
     
     }
  getlogin(email,password)
  {
    var data = new FormData();
    data.append("email", email);
    data.append("password", password);
  
    return this.http.post<Users>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API//user/login',data).pipe(map(response=> response))  
  }
}
