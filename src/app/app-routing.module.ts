import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartQuizComponent} from './components/start-quiz/start-quiz.component';
import {QuizQuestionComponent} from './components/quiz-question/quiz-question.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterComponent} from './components/register/register.component';
const routes: Routes = [{path:'startPage',component:StartQuizComponent },
                        {path:'questions',component:QuizQuestionComponent },
                        {path:'login',component:LogInComponent },
                        {path:'register',component:RegisterComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
