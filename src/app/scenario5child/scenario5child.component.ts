import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5child',
  templateUrl: './scenario5child.component.html',
  styleUrls: ['./scenario5child.component.css']
})
export class Scenario5childComponent {
  message: string = "Hello from grand child!"
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
