import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { Component1Component } from './component1/component1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3parentComponent } from './scenario3parent/scenario3parent.component';
import { Scenario3childComponent } from './scenario3child/scenario3child.component';
import { Scenario4childComponent } from './scenario4child/scenario4child.component';
import { ScenarioparentComponent } from './scenarioparent/scenarioparent.component';
import { Scenario4parentComponent } from './scenario4parent/scenario4parent.component';
import { Scenario5parentComponent } from './scenario5parent/scenario5parent.component';
import { Scenario5childComponent } from './scenario5child/scenario5child.component';
import { Scenario5grandparentComponent } from './scenario5grandparent/scenario5grandparent.component';
import { Scene6component1Component } from './scene6component1/scene6component1.component';
import { Scene6component2Component } from './scene6component2/scene6component2.component';
import { Scene6component3Component } from './scene6component3/scene6component3.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    Component1Component,
    Scenario2Component,
    Scenario3parentComponent,
    Scenario3childComponent,
    Scenario4childComponent,
    ScenarioparentComponent,
    Scenario4parentComponent,
    Scenario5parentComponent,
    Scenario5childComponent,
    Scenario5grandparentComponent,
    Scene6component1Component,
    Scene6component2Component,
    Scene6component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
