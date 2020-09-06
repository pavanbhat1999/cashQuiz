import { Component, OnInit } from '@angular/core';
import {QuestionService}  from '../quiz-question/question.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
  questions = [];
  printQuestion : string;
  constructor(private service : QuestionService) { }

  ngOnInit(): void {
    this.service.getfun()
    .subscribe(response => 
    {
    console.log(response);
    this.callfun(response);
    });
  }
callfun(response){
console.log("called")
this.questions = response;
console.log(this.questions[0].mq_question);
this.printQuestion=this.questions[0].mq_question
}
}
