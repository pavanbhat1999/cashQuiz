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
  time:number=10;
  redHeartCount : number = 1;
  redHeartUsed =false;
  yellowHeartUsed =false;
  yellowHeartCount : number =2;
  round : number =1;
  questions = [];
  question : number = 0;
  question_lv2:number = 9;
  question_lv3 : number =13;
  questionNow : number = 0;
  rightanswer : number = 0;
  rightOption = [];
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
  event = {action: "done", left: 0, status: 3, text: "0"};
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
if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="right")
this.rightOption[0]="green";
if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="right")
this.rightOption[1]="green";
if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="right")
this.rightOption[2]="green";
if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="right")
this.rightOption[3]="green";
// var i;
// for(i=0;i<5;i++)
// {
//   if(this.questions[this.question].mcq_answer_master[i].mc_is_true_answer=="right")
//   this.rightOption[i]="green";
// }
this.printQuestion=this.questions[this.question].mq_question;
this.loadComplete = true;

}
onTImerFinished(e)
{
  console.log(e);
  if (e["action"] == "done")
  {
    this.rightOption=[];
    this.question++;
    if(this.question==5)
    this.question=10;
    if(this.question==13)
    this.question=14;
    if (this.question<16)
    {
      console.log("question complete goto next");
      this.selectedoption = false;
      this.bgcolor = '#0f3356';
      
      
      console.log(this.questions[this.question].mcq_answer_master);
      this.printQuestion=this.questions[this.question].mq_question;
      this.questionNow++;
      this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
      this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
      this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
      this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
     
        if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="right")
        this.rightOption[0]="green";
        if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="right")
        this.rightOption[1]="green";
        if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="right")
        this.rightOption[2]="green";
        if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="right")
        this.rightOption[3]="green";
      
      //// if(this.question==4)
      //// this.question_lv2 =9;
      this.restart();
    }
   
    // else if(this.question>=9&&this.question<12){

    //   console.log("question complete goto next");
    //   this.selectedoption = false;
    //   this.bgcolor = '#0f3356';
    //   this.question++;
      
    //   console.log(this.questions[this.question].mcq_answer_master);
    //   this.printQuestion=this.questions[this.question].mq_question;
    //   this.questionNow++;
    //   this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
    //   this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
    //   this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
    //   this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
    //   if(this.question==12)
    //   this.question +=1;
    //   this.restart();
    // }
    // else if(this.question<20&&this.questionNow<9)
    // {
    //   console.log("question complete goto next");
    //   this.selectedoption = false;
    //   this.bgcolor = '#0f3356';
    //   this.question++;
      
    //   console.log(this.questions[this.question].mcq_answer_master);
    //   this.printQuestion=this.questions[this.question].mq_question;
    //   this.questionNow++;
    //   this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
    //   this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
    //   this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
    //   this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
      
    //   this.restart();
    // }
    else{
      this.finished = true;
      
      this.service.putAmount(this.rightanswer,this.round);
      this.amount = this.service.getAmount();
    }
  }
}
restart() {
  this.redHeartUsed =false;
  this.yellowHeartUsed = false;
  
 setTimeout(()=>this.counter.restart()) 
}
begin(){
  this.counter.begin();
  
}

redHeart(){
  
  if(this.redHeartCount>0&&!this.redHeartUsed)
  {
  this.redHeartUsed = true;
  this.redHeartCount--;
  console.log("red pressed moving to next question");
  this.questionNow--;
  this.onTImerFinished(this.event); 
  }
  
}

yellowHeart(){
if(this.yellowHeartCount>0&&!this.yellowHeartUsed)
{
  this.yellowHeartUsed = true;
  this.yellowHeartCount--;
  console.log("yellow heart Used");
}
}
// Marking the correct Answer
markCorrect(){

}

//---------------------------------- Option Selected properties-----------------------------------------------
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
  this.counter.stop();
  setTimeout(() => {
    this.onTImerFinished(this.event);
  }, 2000);
  

 
}
pauseTimer(){
  this.counter.ngOnDestroy();
  
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
  this.counter.stop();
  setTimeout(() => {
    this.onTImerFinished(this.event);
  }, 2000);
 
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
  this.counter.stop();
  setTimeout(() => {
    this.onTImerFinished(this.event);
  }, 2000);
 
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
  this.counter.stop();
  setTimeout(() => {
    this.onTImerFinished(this.event);
  }, 2000);
 
}
// ------------------------------------------------------Continue to next round----------------------------------------------------
continueClicked()
{
  this.round++;
  this.rightanswer = 0;
  this.question = 0;
  this.questionNow = 0;
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
  if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="right")
  this.rightOption[0]="green";
  if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="right")
  this.rightOption[1]="green";
  if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="right")
  this.rightOption[2]="green";
  if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="right")
  this.rightOption[3]="green";
  this.loadComplete = true;
  
  }
}
