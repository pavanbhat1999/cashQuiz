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
  questionNow : number = 0;
  rightanswer : number = 0;
  finished = false;
  printQuestion : string;
  //printQuestionNumber : string;
  loadComplete = false;
  option1 : number;
  option2 : number;
  option3 : number;
  option4 : number;
  bgcolor : string = '#0f3356';

  selectedoption = false;
  selectedoption1 = false;
  selectedoption2 = false;
  selectedoption3 = false;
  selectedoption4 = false;
  selectedBorder : string = "";
  opacity : string = "";
  opacity1 : string = "";
  opacity2 : string = "";
  opacity3 : string = "";
  opacity4 : string = "";
  val = "";
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
    if (this.question<4)
    {
      console.log("question complete goto next");
      this.selectedoption = false;
      this.bgcolor = '#0f3356';
      this.question++;
      console.log(this.questions[this.question].mcq_answer_master);
      this.printQuestion=this.questions[this.question].mq_question;
      this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
      this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
      this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
      this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
      
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
  {
  this.bgcolor = '#f64225';
 
  }
  this.selectedoption = true;
  this.initOpacity();
  this.opacity1 = "white";
  
  

 
}
// optionStyles()
// {
//   if (this.selectedoption1==true){
//   this.initOpacity();
//   this.opacity1= '100%'
// }
//   if (this.selectedoption2==true)
//   {
//     this.initOpacity();
//   this.opacity2= '100%'
//   }
//   if (this.selectedoption3==true)
//   {
//     this.initOpacity();
//   this.opacity3= '100%'
//   }
//   if (this.selectedoption4==true)
//   {
//     this.initOpacity();
//   this.opacity4= '100%'
//   }

// }
initOpacity(){
  this.opacity1  = "#464748";
  this.opacity2  = "#464748";
  this.opacity3  = "#464748";
  this.opacity4  = "#464748";
  

}

selectoption2(){
  if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="right")
  {
    this.bgcolor = 'green';
    
    this.rightanswer ++;
    }
  if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="wrong")
  {
  this.bgcolor = 'red';
  
  }
  this.selectedoption = true;
  this.initOpacity();
  this.opacity2 = "white";
 
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
  this.initOpacity();
  this.opacity3 = "white";
 
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
  this.initOpacity();
  this.opacity4 = "white";
 
}
continueClicked()
{
  this.round++;
  this.rightanswer = 0;
  this.question = 0;
  console.log("amount= "+this.rightanswer);
  console.log("GotAmount="+this.service.getAmount());
  this.loadComplete = false;
  this.finished = false;
  this.selectedoption = false;
  this.bgcolor = '#0f3356';
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
