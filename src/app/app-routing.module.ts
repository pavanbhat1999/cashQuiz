import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartQuizComponent} from './components/start-quiz/start-quiz.component';
import {QuizQuestionComponent} from './components/quiz-question/quiz-question.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterComponent} from './components/register/register.component';
import {DepositePageComponent} from './components/deposite-page/deposite-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import {GreenMoneyDetailComponent} from './components/green-money-detail/green-money-detail.component';
import {WinPageComponent} from './components/win-page/win-page.component';
import {AboutUsComponent} from './components/about-us/about-us.component'
const routes: Routes = [{path:'startPage',component:StartQuizComponent },
                        {path:'questions',component:QuizQuestionComponent },
                        {path:'login',component:LogInComponent },
                        {path:'register',component:RegisterComponent },
                        {path:'depositePage',component:DepositePageComponent },
                        {path:'paymentPage',component:PaymentPageComponent },
                        {path:'greenMoneyDetail',component:GreenMoneyDetailComponent },
                        {path:'winPage',component:WinPageComponent },
                        {path:'aboutUs',component:AboutUsComponent },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
