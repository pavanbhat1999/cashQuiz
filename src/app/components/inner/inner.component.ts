import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() appmain;
@Output() startclicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
startClicked(){
  
  this.startclicked.emit("true");
}
}
