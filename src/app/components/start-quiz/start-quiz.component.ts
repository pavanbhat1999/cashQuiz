import { Component, OnInit, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {} from 'jquery';
import {MainServiceService} from '../main-service.service'
// 1. import dependencies
declare var jQuery: any;
 
 
// 2. pass then in constructor

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
@Input() demo;
@Output() start = new EventEmitter();

isCollapsed = true;
username ;
email;
userDetail;
reload : number = 0;
option=1;
displayoption=["HOME","PAYMENT","HISTORY","ABOUT"];

mySubscription: any;
  constructor(private mainservice : MainServiceService,private router : Router) {

   
   
   }
   
  ngOnInit(): void {
    
    // setTimeout(function(){
    //   location.reload()
    // },1000);
    

  // -------Used for getting user deatils
  this.mainservice.getUserDetails().subscribe(response=>
    {
    
    console.log(response);
    this.userDetail = response;
    this.mainservice.user_details=response;     // storing user all details in main server for future references
      this.mainservice.u_id=this.userDetail.u_id;
      this.mainservice.u_username=this.userDetail.u_username;
      this.mainservice.u_email=this.userDetail.u_email;
      console.log(this.mainservice.user_details);
      this.username=this.userDetail.u_username;
      this.email=this.userDetail.u_email;
    }
    );
    
    $(document).ready(function () {
    //  (<any> $("#sidebar")).mCustomScrollbar({
    //       theme: "minimal"   It was not working with angular
    //   });
    
      $('#dismiss, .overlay').on('click', function () {
          $('#sidebar').removeClass('active');
          $('.overlay').removeClass('active');
      });

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').addClass('active');
          $('.overlay').addClass('active');
          $('.collapse.in').toggleClass('in');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
  });

    // localStorage.setItem('dataSource', this.mainservice.u_email);
    // console.log(localStorage.getItem('dataSource'));
//     const firstTime = localStorage.getItem('key');
//  if(!firstTime){
//   localStorage.setItem('key','loaded')
  
//   location.reload();
//  }else {
//    localStorage.removeItem('key') 
//  }
 
}

startTheQuiz(){
  this.start.emit();
 
}
menu(choice){
  this.option=choice;
  
}

  }

