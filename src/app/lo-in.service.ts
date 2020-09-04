import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoInService {

  constructor(private http: HttpClient) { }
  getfun()
  {
    return this.http.get('http://moneyglobeapp.com/cash_quiz/API/Cash-Quiz.postman_collection.json')  
  }
}
