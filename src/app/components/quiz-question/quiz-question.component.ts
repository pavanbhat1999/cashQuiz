import { Component, OnInit,ViewChild } from '@angular/core';
import {QuestionService}  from '../quiz-question/question.service';
import { from } from 'rxjs';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})

export class QuizQuestionComponent implements OnInit {
  questions = [];
  question : number = 0;
  printQuestion : string;
  //printQuestionNumber : string;
  loadComplete = false;
  option1 : number;
  option2 : number;
  option3 : number;
  option4 : number;
  
  @ViewChild('countdown') counter: CountdownComponent;
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
console.log(this.questions[this.question].mq_question);
console.log(this.questions[this.question].mcq_answer_master);
this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
    this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
    this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
this.printQuestion=this.questions[this.question++].mq_question;
this.loadComplete = true;

}
onTImerFinished(e){
  if (e["action"] == "done"){
    console.log("question complete goto next");
    this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
    this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
    this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
    this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
    this.printQuestion=this.questions[this.question++].mq_question;
    this.restart();
    
  }
}
restart() {
 setTimeout(()=>this.counter.restart()) 
}
begin(){
  this.counter.begin();
}
}
