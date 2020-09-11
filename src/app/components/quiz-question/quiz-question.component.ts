import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import {QuestionService}  from '../quiz-question/question.service';
import { from } from 'rxjs';
import { CountdownComponent } from 'ngx-countdown';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})

export class QuizQuestionComponent implements OnInit {
  @Output()continueclicked = new EventEmitter();
  amount ;
  round : number =1;
  questions = [];
  question : number = 0;
  rightanswer : number = 0;
  finished = false;
  printQuestion : string;
  //printQuestionNumber : string;
  loadComplete = false;
  option1 : number;
  option2 : number;
  option3 : number;
  option4 : number;
  bgcolor : string = 'blue';

  selectedoption = false;
  
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
this.printQuestion=this.questions[this.question].mq_question;
this.loadComplete = true;

}
onTImerFinished(e){
  console.log(e);
  if (e["action"] == "done")
  {
    if (this.question<0)
    {
      console.log("question complete goto next");
      this.selectedoption = false;
      this.bgcolor = 'blue';
      this.question++;
      console.log(this.questions[this.question].mcq_answer_master);
      this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
      this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
      this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
      this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
      this.printQuestion=this.questions[this.question].mq_question;
      this.restart();
    }
    else{
      this.finished = true;
      this.service.putAmount(this.rightanswer,this.round);
      this.amount = this.service.getAmount();
    }
  }
}
restart() {
 setTimeout(()=>this.counter.restart()) 
}
begin(){
  this.counter.begin();
}
selectoption1(){
  console.log(this.questions[this.question].mcq_answer_master);
  console.log(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer);
  if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="right")
  {
  this.bgcolor = 'green';
  this.rightanswer ++;
  }
  if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="wrong")
  this.bgcolor = 'red';
  this.selectedoption = true;
 
}
selectoption2(){
  if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="right")
  {
    this.bgcolor = 'green';
    this.rightanswer ++;
    }
  if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="wrong")
  this.bgcolor = 'red';
  this.selectedoption = true;
 
}
selectoption3(){
  if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="right")
  {
    this.bgcolor = 'green';
    this.rightanswer ++;
    }
  if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="wrong")
  this.bgcolor = 'red';
  this.selectedoption = true;
 
}
selectoption4(){
  if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="right")
  {
    this.bgcolor = 'green';
    this.rightanswer ++;
    }
  if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="wrong")
  this.bgcolor = 'red';
  this.selectedoption = true;
 
}
continueClicked()
{
  this.round++;
  this.rightanswer = 0;
  console.log("amount= "+this.rightanswer);
  console.log("GotAmount="+this.service.getAmount());
  this.loadComplete = false;
  this.finished = false;
  this.selectedoption = false;
  this.bgcolor = 'blue';
  this.service.getfun()
    .subscribe(response => 
    {
    console.log(response);
    this.callfun1(response);
    });
}
callfun1(response){
  console.log("called")
  this.questions = response;
  
  console.log(this.questions[this.question].mq_question);
  console.log(this.questions[this.question].mcq_answer_master);
  this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
  this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
  this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
  this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
  this.printQuestion=this.questions[this.question].mq_question;
  this.loadComplete = true;
  
  }
}
