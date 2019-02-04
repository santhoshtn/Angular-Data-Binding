import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3child',
  templateUrl: './scenario3child.component.html',
  styleUrls: ['./scenario3child.component.css']
})
export class Scenario3childComponent  {
  @Input() 
  childMessage: string;
}
