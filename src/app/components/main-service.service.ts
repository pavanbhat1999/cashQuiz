import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { from, Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import {Deposites} from '../components/deposite-page/deposite';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  d_number : number = 0;
  redheart : number = 0;
  yellowheart : number = 0;
  constructor(private http: HttpClient) { }

  putDeposite(id){
    console.log("id="+id);
    this.d_number = id;
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










