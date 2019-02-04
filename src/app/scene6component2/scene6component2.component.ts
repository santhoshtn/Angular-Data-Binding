import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scene6component2',
  templateUrl: './scene6component2.component.html',
  styleUrls: ['./scene6component2.component.css']
})
export class Scene6component2Component  {
  message: string = "Component 2!"
  @Output() messageEvent= new EventEmitter<string>();
 
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
