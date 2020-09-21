import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Deposites} from './deposite';
import { from, Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DepositeListService {

  constructor(private http: HttpClient) { }
  getfun()
  {
    var data = new FormData();
    
  
    return this.http.post<Deposites>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API/quiz/deposite/deposite_list',data).pipe(map(response => response.data))  
  }
}

