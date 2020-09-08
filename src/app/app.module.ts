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

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    StartQuizComponent,
    AboutUsComponent,
    InnerComponent,
    QuizQuestionComponent,
    EmptyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule,
    Ng2TelInputModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule
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
