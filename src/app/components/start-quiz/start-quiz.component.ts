import { Component, OnInit, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  
}
startTheQuiz(){
  this.start.emit();
}

  }

