import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Questions} from './questions';
import {Answers} from './answers'
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  form: FormGroup;
  amount : number=0 ;
  each_amount = 0;
  bonus_amount:number=0;
  su_bonus_amount=0;
  max_amount:number;
  constructor( 
    private http: HttpClient) {
     
     }

     /// amount additions
     putAmount(rightAnswer : number,round){
      //  if(round==1){
      //   rightAnswer=rightAnswer*0.2;
      //  }
      //  else
      if(rightAnswer>=8)
      {
            //Goto bonus Round 
            rightAnswer=8*this.each_amount;
      }
      else{
        
        rightAnswer = rightAnswer*this.each_amount;
        }
        rightAnswer.toFixed(2);
        this.amount.toFixed(2);
        this.amount = this.amount+rightAnswer;
     }
     getAmount(){
        return this.amount;
     }
  getfun(category_id,type,user_id)
  {
    var data = new FormData();
    data.append("category_id",category_id );
    data.append("type", type);
    data.append("user_id", user_id);
    data.append("time", "");
  
    return this.http.post<Questions>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API/quiz/mcq_list',data).pipe(map(response => response.data))  
  }
  getfun_bonus(category_id,type,user_id)
  {
    var data = new FormData();
    data.append("category_id",category_id );
    data.append("type", type);
    data.append("user_id", user_id);
    data.append("time", "");
  
    return this.http.post<Questions>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API/quiz/mcq_list',data).pipe(map(response => response.data))  
  
  }
  getfun_superbonus(category_id,type,user_id){
    var data = new FormData();
    data.append("category_id",category_id );
    data.append("type", type);
    data.append("user_id", user_id);
    data.append("time", "");
  
    return this.http.post<Questions>('https://cors-anywhere.herokuapp.com/https://moneyglobeapp.com/cash_quiz/API/quiz/mcq_list',data).pipe(map(response => response.data))  
  
  }
}

