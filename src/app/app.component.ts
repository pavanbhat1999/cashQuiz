import { Component } from '@angular/core';
import {LoInService} from './lo-in.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cashQuiz';
  register=true;
  start = true;
  registerClicked(){
this.register=false;
  }
  logInClicked(){
    this.register = true;
  }
  startPage(){
    this.start = false;
  }
  constructor (private service : LoInService){
    
  }
  ngOnInit(){
    this.service.getfun().subscribe(data => console.log(data));
  }
}
