import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5parent',
  templateUrl: './scenario5parent.component.html',
  styleUrls: ['./scenario5parent.component.css']
})
export class Scenario5parentComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  message:string;

  receiveMessage($event) {
    this.message = $event
    this.messageEvent.emit(this.message)
  }
  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  // }
}
