import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class LoInService {
  form: FormGroup;
  constructor( 
    private http: HttpClient) {
     
     }
  getfun()
  {
    var data = new FormData();
data.append("email", "loenterprise@yahoo.com");
// data.append("password", "lo6525");
  
    return this.http.post('https://moneyglobeapp.com/cash_quiz/API//user/login',data)  
  }
}
