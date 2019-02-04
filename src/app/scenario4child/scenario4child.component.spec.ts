import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4childComponent } from './scenario4child.component';

describe('Scenario4childComponent', () => {
  let component: Scenario4childComponent;
  let fixture: ComponentFixture<Scenario4childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
