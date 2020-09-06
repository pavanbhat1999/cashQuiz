import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cashQuiz';
  register=true;
  login = false;
  start = true;
  questions = true;
  registerClicked(){
this.register=false;
  }
  logInClicked(){
    this.register = true;
    this.login = false;
  }
  startPage(){
    this.start = false;
  }
  startQuiz(){
    this.questions = false;
    this.start = true;
  }
  constructor (){
    
  }
  ngOnInit(){
    
  }
}
