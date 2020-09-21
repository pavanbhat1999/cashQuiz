import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposite-page',
  templateUrl: './deposite-page.component.html',
  styleUrls: ['./deposite-page.component.css']
})
export class DepositePageComponent implements OnInit {
count_r : number =1;
count_y : number = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
