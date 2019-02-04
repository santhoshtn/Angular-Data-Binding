import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene6component2Component } from './scene6component2.component';

describe('Scene6component2Component', () => {
  let component: Scene6component2Component;
  let fixture: ComponentFixture<Scene6component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene6component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
