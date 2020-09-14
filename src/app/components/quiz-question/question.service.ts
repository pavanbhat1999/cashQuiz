import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Questions} from './questions'
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  form: FormGroup;
  amount : number=0 ;
  constructor( 
    private http: HttpClient) {
     
     }
     putAmount(rightAnswer : number,round){
       if(round==1){
        rightAnswer=rightAnswer*0.2;
       }
       else
          rightAnswer = rightAnswer*0.4;
        this.amount = this.amount+rightAnswer;
     }
     getAmount(){
        return this.amount;
     }
  getfun()
  {
    var data = new FormData();
    data.append("category_id", "1");
    data.append("type", "starter");
    data.append("user_id", "6");
    data.append("time", "");
  
    return this.http.post<Questions>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API/quiz/mcq_list',data).pipe(map(response => response.data))  
  }
}

