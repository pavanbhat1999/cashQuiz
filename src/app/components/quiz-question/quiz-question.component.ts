import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import {QuestionService}  from '../quiz-question/question.service';
import { from } from 'rxjs';
import { CountdownComponent } from 'ngx-countdown';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {MainServiceService} from '../main-service.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import {Answers} from './answers';
@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})

export class QuizQuestionComponent implements OnInit {
  @Output()continueclicked = new EventEmitter();
  amount:number ;
  deposite ;
  bonusRound = false;
  bonusPlay = false;
  superbonusPlay = false;
  superbonusround = false;
  goBack = false;
  time:number=10;
  redHeartCount : number = 1;
  redHeartUsed =false;
  yellowHeartUsed =false;
  neverHide = [false,false,false,false]
  yellowHeartCount : number =2;
  round : number =1;
  questions = [];
  question : number = 0;
  question_lv2:number = 9;
  question_lv3 : number =13;
  questionNow : number = 0;
  rightanswer : number = 0;
  wronganswer : number = 0;
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
  
  category_id="";
  type="";
  user_id="";
  answer_submit=[];
  test_submit=
  {
    "category_id": this.category_id,  // take it from main
    "user_id": this.user_id,      //take it from main 
    "payment_history_id": "1",  // take it form deposite
    "round_type": this.type,   // take it from current questions page
     "mcq": [                // apppend for each answer
         
        ]
      }
  j:number=0;
  event = {action: "done", left: 0, status: 3, text: "0"};
  @ViewChild('countdown') counter: CountdownComponent;
  constructor(private service : QuestionService,private mainservice : MainServiceService,private router:Router) { }

  ngOnInit(): void {
    
  //  *****Important test_submit insertion***
 
  // this.test_submit.mcq.push(
  //   new_value
  // );
  
  //   this.test_submit.mcq.push(
  //     new_value1
  //   );
   // console.log("string "+this.test_submit.mcq[0].user_select_right_ans);
    
  //  var raw = JSON.stringify(this.test_submit);
  //   console.log("rw "+raw);
  console.log("id from main="+this.mainservice.d_number);
  console.log("red=",this.mainservice.redheart);
  console.log("amount deposited ="+this.mainservice.totalAmount);
  console.log("user_id="+this.mainservice.u_id);
  this.user_id=this.mainservice.u_id;
  this.category_id=this.mainservice.cat_id;
  this.type=this.mainservice.type;
  console.log("cat_id="+this.mainservice.cat_id);
 //  getting all data from main service
  this.redHeartCount=this.mainservice.redheart;
  this.yellowHeartCount=this.mainservice.yellowheart;
  this.mainservice.getfun_deposite().subscribe(response=>{console.log(response);this.callfun_deposite(response,this.mainservice.d_number)})
  this.test_submit=
  {
    "category_id": this.category_id,  // take it from main
    "user_id": this.user_id,      //take it from main 
    "payment_history_id": "1",  // take it form deposite
    "round_type": this.type,   // take it from current questions page
     "mcq": [                // apppend for each answer
         
        ]
      }
  

  this.service.getfun(this.category_id,"starter",this.user_id)
    .subscribe(response => 
    {
    console.log(response);
    this.callfun(response);
    });

  }



// USer defined functions start here  
callfun(response){
console.log("called")
this.questions = response;
//TODO call this in selected option // Add all attributes do not miss any attribute for any option












console.log(this.questions[this.question].mq_question);
//console.log(this.questions[this.question].mcq_answer_master);
this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
this.markCorrect()

// var i;
// for(i=0;i<5;i++)
// {
//   if(this.questions[this.question].mcq_answer_master[i].mc_is_true_answer=="right")
//   this.rightOption[i]="green";
// }
this.printQuestion=this.questions[this.question].mq_question;
this.loadComplete = true;

}

// ------------------------------------------this is for deposites from deposite page
callfun_deposite(response,number){
  this.deposite = response;
  
 console.log("d_Amount="+this.deposite[number].d_r_amt_st_p_question)
  this.service.each_amount = this.deposite[number].d_r_amt_st_p_question;
  // this.amount=this.deposite[number].d_amount;
  this.service.bonus_amount=this.deposite[number].d_r_amt_bo_round;
  this.service.su_bonus_amount=this.deposite[number].d_r_amt_su_bo_round;
  this.service.max_amount=this.deposite[number].d_r_amt_total;
}


//---------------------------------------------------------------------------
onTImerFinished(e)
{
  console.log(e);
  if (e["action"] == "done")
  {
    this.rightOption=[];
    this.question++;
    if(this.wronganswer>1&&this.bonusRound&&!this.superbonusPlay)
    {
      // alert("you lost bonus round");
      this.bonusRound =false;
      this.finished = true;
      this.goBack=true;
      
    }
    if(this.wronganswer>0&&this.bonusRound&&this.superbonusPlay)
    {
      // alert("you lost super bonus round");
      //this.superbonusPlay=false;
      this.superbonusround = false;
      this.finished = true;
      this.goBack=true;
      
    }
    if(this.question==5)
    this.question=10;
    if(this.question==13)
    this.question=14;
    if (this.question<20&&!this.finished&&this.questionNow<9)
    {
      if(!this.selectedoption)
      {
        this.answer_submit[this.question] = this.questions[this.question];
   
                                                      
        this.answer_submit[this.question].mcq_answer_master[0].is_user_selected=null;
        this.answer_submit[this.question].mcq_answer_master[0].is_red_heart_selected=null;
        this.answer_submit[this.question].mcq_answer_master[0].is_system_selected=null;
        
        this.answer_submit[this.question].mcq_answer_master[1].is_user_selected=null;
        this.answer_submit[this.question].mcq_answer_master[1].is_red_heart_selected=null;
        this.answer_submit[this.question].mcq_answer_master[1].is_system_selected=null;
        
        this.answer_submit[this.question].mcq_answer_master[2].is_user_selected=null;
        this.answer_submit[this.question].mcq_answer_master[2].is_red_heart_selected=null;
        this.answer_submit[this.question].mcq_answer_master[2].is_system_selected=null;
        
        this.answer_submit[this.question].mcq_answer_master[3].is_user_selected=null;
        this.answer_submit[this.question].mcq_answer_master[3].is_red_heart_selected=null;
        this.answer_submit[this.question].mcq_answer_master[3].is_system_selected=null;
        
        this.answer_submit[this.question].user_select_right_ans="fasle";
        this.test_submit.mcq.push(this.answer_submit[this.question]);
        console.log("new=",this.test_submit.mcq[this.questionNow].mq_id);
        var raw = JSON.stringify(this.test_submit);
            console.log("rw1 "+raw);
      
      }
      console.log("question complete goto next");
      this.selectedoption = false;
      this.bgcolor = '#0f3356';
      
      
      //console.log(this.questions[this.question].mcq_answer_master);
      this.printQuestion=this.questions[this.question].mq_question;
      this.questionNow++;
      this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
      this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
      this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
      this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
     //TODO add submiting sccript
      this.markCorrect()
      
      //// if(this.question==4)
      //// this.question_lv2 =9;
      
      this.restart();
    }
   
    // else if(this.question>=9&&this.question<12){

    //   console.log("question complete goto next");
    //   this.selectedoption = false;
    //   this.bgcolor = '#0f3356';
    //   this.question++;
      
    //   //console.log(this.questions[this.question].mcq_answer_master);
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
      
    //   //console.log(this.questions[this.question].mcq_answer_master);
    //   this.printQuestion=this.questions[this.question].mq_question;
    //   this.questionNow++;
    //   this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
    //   this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
    //   this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
    //   this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
      
    //   this.restart();
    // }
    else{
      // if(this.round>=3)
      // {
      //   this.router.navigate(["/winPage"]);
      // }
      this.finished = true;
      this.test_submit_fun();
      if(!this.bonusPlay)
      this.service.putAmount(this.rightanswer,this.round);
      else if(this.bonusPlay&&this.wronganswer<=1&&!this.superbonusPlay)
      {
      this.service.amount +=Number(this.service.bonus_amount);/////add bonus round win amount and heart addition
      console.log("played"+this.superbonusPlay);
      this.type="bonus";
      }
     
      else if(this.bonusPlay&&this.wronganswer<1&&this.superbonusPlay)
      {
        this.service.amount =Number(this.service.max_amount);  // add super bonus total amount
      }
      // else if (this.superbonusPlay&&this.bonusPlay&&this.wronganswer>=1)
      // {
      //   this.service.each_amount=Number(this.service.su_bonus_amount);
      //   this.service.putAmount(this.rightanswer,this.round);
      // }
      this.amount = this.service.getAmount();
      if(this.rightanswer>=8&&!this.bonusRound)
      {
        this.bonusRound = true;
        this.redHeartCount++;
        // this.yellowHeartCount++;
        this.type="bonus";
      }
      if(this.rightanswer>=9&&this.bonusPlay)
      {
        console.log("superbonus round");
        this.redHeartCount++;
        this.yellowHeartCount++;
        this.superbonusround = true;
      }
     
      // if(this.round>=3)
      // {
      //   this.router.navigate(["/winPage"]);
      // }

    }
  }
}
restart() {
  this.redHeartUsed =false;
  this.yellowHeartUsed = false;
  this.neverHide = [false,false,false,false]
  
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
  let numbers = [0,1,2,3,0];
  this.neverHide=[true,true,true,true];
for (let j of numbers) {
  console.log(j);
  
 if(this.questions[this.question].mcq_answer_master[j].mc_is_true_answer=="right")
  {
     this.neverHide[j]=false;
     this.neverHide[j+1]=false;
     if(j==3)
     this.neverHide[0]=false;
  }
  
  
     
}
  console.log("yellow heart Used");
}
}
// Marking the correct Answer
markCorrect(){
  
  // for(this.j=0;this.j<5;this.j++){
  //   if(this.questions[this.question].mcq_answer_master[this.j].mc_is_true_answer=="right")
  //   this.rightOption[this.j]="green";
  // }
  let numbers = [0,1, 2, 3];
for (let j of numbers) {
  console.log(j);
  if(this.questions[this.question].mcq_answer_master[j].mc_is_true_answer=="right")
     this.rightOption[j]="green";
     
}
  // if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="right")
  // this.rightOption[0]="green";
  // if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="right")
  // this.rightOption[1]="green";
  // if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="right")
  // this.rightOption[2]="green";
  // if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="right")
  // this.rightOption[3]="green";
}

//---------------------------------- Option Selected properties-----------------------------------------------
selectoption1(){
  //console.log(this.questions[this.question].mcq_answer_master);
  console.log(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer);




  

  this.answer_submit[this.question] = this.questions[this.question];
   
                                                      
  this.answer_submit[this.question].mcq_answer_master[0].is_user_selected="true";
  this.answer_submit[this.question].mcq_answer_master[0].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[0].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[1].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[1].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[1].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[2].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[2].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[2].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[3].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[3].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[3].is_system_selected=null;
  
  this.answer_submit[this.question].user_select_right_ans="true";
  this.test_submit.mcq.push(this.answer_submit[this.question]);
  console.log("new=",this.test_submit.mcq[this.questionNow].mq_id);
  var raw = JSON.stringify(this.test_submit);
      console.log("rw1 "+raw);











  if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="right")
  {
  this.bgcolor = 'green';
  
 

  this.rightanswer ++;
  }
  if(this.questions[this.question].mcq_answer_master[0].mc_is_true_answer=="wrong")
  {
  this.bgcolor = '#f64225';
  this.wronganswer++;
  }
  this.selectedoption = true;
  this.initOpacity();
  this.opacity1 = "grey";
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








  this.answer_submit[this.question] = this.questions[this.question];
   
                                                      
  this.answer_submit[this.question].mcq_answer_master[0].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[0].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[0].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[1].is_user_selected="true";
  this.answer_submit[this.question].mcq_answer_master[1].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[1].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[2].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[2].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[2].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[3].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[3].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[3].is_system_selected=null;
  
  this.answer_submit[this.question].user_select_right_ans="true";
  this.test_submit.mcq.push(this.answer_submit[this.question]);
  console.log("new=",this.test_submit.mcq[this.questionNow].mq_id);
  var raw = JSON.stringify(this.test_submit);
      console.log("rw1 "+raw);

















  if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="right")
  {
    this.bgcolor = 'green';
    
    this.rightanswer ++;
    }
  if(this.questions[this.question].mcq_answer_master[1].mc_is_true_answer=="wrong")
  {
  this.bgcolor = 'red';
  this.wronganswer++;
  
  }
  this.selectedoption = true;
  this.initOpacity();
  this.opacity2 = "grey";
  this.counter.stop();
  setTimeout(() => {
    this.onTImerFinished(this.event);
  }, 2000);
 
}
selectoption3(){









  this.answer_submit[this.question] = this.questions[this.question];
   
                                                      
  this.answer_submit[this.question].mcq_answer_master[0].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[0].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[0].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[1].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[1].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[1].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[2].is_user_selected="true";
  this.answer_submit[this.question].mcq_answer_master[2].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[2].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[3].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[3].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[3].is_system_selected=null;
  
  this.answer_submit[this.question].user_select_right_ans="true";
  this.test_submit.mcq.push(this.answer_submit[this.question]);
  console.log("new=",this.test_submit.mcq[this.questionNow].mq_id);
  var raw = JSON.stringify(this.test_submit);
      console.log("rw1 "+raw);
















  if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="right")
  {
    this.bgcolor = 'green';
    this.rightanswer ++;
    }
  if(this.questions[this.question].mcq_answer_master[2].mc_is_true_answer=="wrong")
  {
  this.bgcolor = 'red';
  this.wronganswer++;
  }
  this.selectedoption = true;
  this.initOpacity();
  this.opacity3 = "grey";
  this.counter.stop();
  setTimeout(() => {
    this.onTImerFinished(this.event);
  }, 2000);
 
}
selectoption4(){






  this.answer_submit[this.question] = this.questions[this.question];
   
                                                      
  this.answer_submit[this.question].mcq_answer_master[0].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[0].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[0].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[1].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[1].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[1].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[2].is_user_selected=null;
  this.answer_submit[this.question].mcq_answer_master[2].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[2].is_system_selected=null;
  
  this.answer_submit[this.question].mcq_answer_master[3].is_user_selected="true";
  this.answer_submit[this.question].mcq_answer_master[3].is_red_heart_selected=null;
  this.answer_submit[this.question].mcq_answer_master[3].is_system_selected=null;
  
  this.answer_submit[this.question].user_select_right_ans="true";
  this.test_submit.mcq.push(this.answer_submit[this.question]);
  console.log("new=",this.test_submit.mcq[this.questionNow].mq_id);
  var raw = JSON.stringify(this.test_submit);
      console.log("rw1 "+raw);










  if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="right")
  {
    this.bgcolor = 'green';
    this.rightanswer ++;
    }
  if(this.questions[this.question].mcq_answer_master[3].mc_is_true_answer=="wrong")
  {
    this.bgcolor = 'red';
    this.wronganswer++;
    }
  this.selectedoption = true;
  this.initOpacity();
  this.opacity4 = "grey";
  this.counter.stop();
  setTimeout(() => {
    this.onTImerFinished(this.event);
  }, 2000);
 
}
// ------------------------------------------------------Continue to next round----------------------------------------------------
continueClicked()
{
 
      
  if(this.rightanswer>=8&&!this.superbonusround)
  {
    
    // alert("You have entered Bonus round");
    this.bonusRoundQuestions();
    
  }
  else if(this.bonusPlay&&this.superbonusround&&this.rightanswer>9){
      this.type="superbonus";
      // alert("This is super bonus Round");
      this.superbonusRoundQuestions();
  }
  else
  {
    if(this.round>=3)
    {
      this.router.navigate(["/startPage"]);
    }
    
    this.round++;
    this.goBack=false;
    this.rightanswer = 0;
    this.wronganswer = 0;
    this.bonusRound = false;
    this.bonusPlay=false;
    this.superbonusround = false;
    this.superbonusPlay = false;
    this.question = 0;
    this.questionNow = 0;
    this.neverHide=[false,false,false,false];
    console.log("amount= "+this.rightanswer);
    console.log("GotAmount="+this.service.getAmount());
    this.loadComplete = false;
    this.finished = false;
    this.selectedoption = false;
    this.bgcolor = '#0f3356';
    this.service.getfun(this.category_id,"starter",this.user_id)
      .subscribe(response => 
      {
      console.log(response);
      this.callfun1(response);
      });
    }
    this.test_submit=
      {
        "category_id": this.category_id,  // take it from main
        "user_id": this.user_id,      //take it from main 
        "payment_history_id": "1",  // take it form deposite
        "round_type": this.type,   // take it from current questions page
         "mcq": [                // apppend for each answer
             
            ]
          }
}
callfun1(response){
  console.log("called")
  this.questions = response;
  
  console.log(this.questions[this.question].mq_question);
  //console.log(this.questions[this.question].mcq_answer_master);
  this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
  this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
  this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
  this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
  this.printQuestion=this.questions[this.question].mq_question;
  this.markCorrect()
  // this.rightOption[3]="green";
  this.loadComplete = true;
  
  }
 bonusRoundQuestions(){
   console.log("This is bonus");
  this.bonusPlay = true;
  this.rightanswer = 0;
  this.wronganswer = 0;
  this.question = 0;
  this.questionNow = 0;
  this.neverHide=[false,false,false,false];
  console.log("amount= "+this.rightanswer);
  console.log("GotAmount="+this.service.getAmount());
  this.loadComplete = false;
  this.finished = false;
  this.selectedoption = false;
  this.bgcolor = '#0f3356';
  this.service.getfun_bonus(this.category_id,"bonus",this.user_id)
      .subscribe(response => 
      {
      console.log(response);
      this.callfun_bonus(response);
      });
    }
 

    callfun_bonus(response){
      console.log("called")
      this.questions = response;
      
      console.log(this.questions[this.question].mq_question);
      //console.log(this.questions[this.question].mcq_answer_master);
      this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
      this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
      this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
      this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
      this.printQuestion=this.questions[this.question].mq_question;
      this.markCorrect()
      // this.rightOption[3]="green";
      this.loadComplete = true;
    }
    superbonusRoundQuestions(){
      console.log("This is super bonus");
     this.bonusPlay = true;
     this.superbonusPlay = true;
     this.rightanswer = 0;
     this.wronganswer = 0;
     this.question = 0;
     this.questionNow = 0;
     this.neverHide=[false,false,false,false];
     console.log("amount= "+this.rightanswer);
     console.log("GotAmount="+this.service.getAmount());
     this.loadComplete = false;
     this.finished = false;
     this.selectedoption = false;
     this.bgcolor = '#0f3356';
     this.service.getfun_superbonus(this.category_id,"bonus",this.user_id)
         .subscribe(response => 
         {
         console.log(response);
         this.callfun_bonus(response);
         });
    }
    getfun_superbonus(response){
      console.log("called")
      this.questions = response;
     
      console.log(this.questions[this.question].mq_question);
      //console.log(this.questions[this.question].mcq_answer_master);
      this.option1 = this.questions[this.question].mcq_answer_master[0].answer;
      this.option2 = this.questions[this.question].mcq_answer_master[1].answer;
      this.option3 = this.questions[this.question].mcq_answer_master[2].answer;
      this.option4 = this.questions[this.question].mcq_answer_master[3].answer;
      this.printQuestion=this.questions[this.question].mq_question;
      this.markCorrect()
      // this.rightOption[3]="green";
      this.loadComplete = true;
    }

    test_submit_fun(){
      var raw = JSON.stringify(this.test_submit);
    console.log("rw "+raw);
      this.mainservice.user_test_submit(raw).subscribe(response=>console.log(response))
    }
}





