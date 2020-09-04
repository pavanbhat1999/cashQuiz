import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { InnerComponent } from './components/inner/inner.component';
import { QuizQuestionComponent } from './componets/quiz-question/quiz-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    StartQuizComponent,
    AboutUsComponent,
    InnerComponent,
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
