import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario4child',
  templateUrl: './scenario4child.component.html',
  styleUrls: ['./scenario4child.component.css']
})
export class Scenario4childComponent implements OnInit {
  mess="message from child!";
  constructor() { }

  ngOnInit() {
  }

}
