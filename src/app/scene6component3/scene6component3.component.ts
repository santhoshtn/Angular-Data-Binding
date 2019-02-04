import { Component, OnInit,Input } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-scene6component3',
  templateUrl: './scene6component3.component.html',
  styleUrls: ['./scene6component3.component.css']
})
export class Scene6component3Component implements OnInit {
  @Input() childMessage:string;
  constructor() { }

  ngOnInit() {
  }

}
