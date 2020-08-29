import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() register_val = new EventEmitter();
onClicked(){
this.register_val.emit();
}
}
