import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene6component1',
  templateUrl: './scene6component1.component.html',
  styleUrls: ['./scene6component1.component.css']
})
export class Scene6component1Component implements OnInit {
  message:string;

  receiveMessage($event) {
    this.message = $event
  }
  constructor() { }

  ngOnInit() {
  }

}
