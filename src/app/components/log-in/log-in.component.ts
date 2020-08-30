import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
@Input() movie;

  constructor() { }

  ngOnInit(): void {
  }
@Output() register_val=new EventEmitter();
@Output() login = new EventEmitter();
onClick(){
  this.register_val.emit("true");
}
loginClicked(){
this.login.emit("true");
}
}
