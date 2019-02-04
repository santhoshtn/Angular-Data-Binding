import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5grandparent',
  templateUrl: './scenario5grandparent.component.html',
  styleUrls: ['./scenario5grandparent.component.css']
})
export class Scenario5grandparentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message:string;
  receiveMessage($event) {
    this.message = $event
  }
}
