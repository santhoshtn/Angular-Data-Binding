import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3childComponent } from './scenario3child.component';

describe('Scenario3childComponent', () => {
  let component: Scenario3childComponent;
  let fixture: ComponentFixture<Scenario3childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
