import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3parentComponent } from './scenario3parent.component';

describe('Scenario3parentComponent', () => {
  let component: Scenario3parentComponent;
  let fixture: ComponentFixture<Scenario3parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
