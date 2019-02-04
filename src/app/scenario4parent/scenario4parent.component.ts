import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Scenario4childComponent } from '../scenario4child/scenario4child.component';


@Component({
  selector: 'app-scenario4parent',
  templateUrl: './scenario4parent.component.html',
  styleUrls: ['./scenario4parent.component.css']
})
export class Scenario4parentComponent implements AfterViewInit  {
  @ViewChild(Scenario4childComponent) child;
  constructor() { }
  message:string;
  
  ngAfterViewInit(){
    this.message=this.child.mess;
  }
}
