import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cashQuiz';
  register=true;
  stratPage = true;
  registerClicked(){
this.register=false;
  }
  logInClicked(){
    this.register = true;
  }
  startPage(){
    this.stratPage = false;
  }
}
