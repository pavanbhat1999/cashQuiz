import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { InnerComponent } from './components/inner/inner.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { CountdownModule } from 'ngx-countdown';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DepositePageComponent } from './components/deposite-page/deposite-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { GreenMoneyDetailComponent } from './components/green-money-detail/green-money-detail.component';
import { WinPageComponent } from './components/win-page/win-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    StartQuizComponent,
    AboutUsComponent,
    InnerComponent,
    QuizQuestionComponent,
    EmptyPageComponent,
    DepositePageComponent,
    PaymentPageComponent,
    GreenMoneyDetailComponent,
    WinPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule,
    Ng2TelInputModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // // forchild
    // // RouterModule.forRoot([           
    // //   {path:'login',component: EmptyPageComponent },
    // //   {path:'startPage',component:StartQuizComponent }
    //   // {path:'startPage/:users',component:StartQuizComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
