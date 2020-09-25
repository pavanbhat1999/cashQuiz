import { Component, OnInit, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import {} from 'jquery';
// 1. import dependencies

 
 
// 2. pass then in constructor

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
@Input() demo;
@Output() start = new EventEmitter();
reload : number = 0;
option=1;
  constructor() { }

  ngOnInit(): void {
  
    // setTimeout(function(){
    //   location.reload()
    // },1000);
    const firstTime = localStorage.getItem('key')
 if(!firstTime){
  localStorage.setItem('key','loaded')
  location.reload()
 }else {
   localStorage.removeItem('key') 
 }
}
startTheQuiz(){
  this.start.emit();
}
menu(choice){
  this.option=choice;
}

  }

